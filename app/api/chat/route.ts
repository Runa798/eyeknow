import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { models, defaultModelId } from '@/lib/models';
import { systemPrompt } from '@/lib/prompts';

export const maxDuration = 60;

export async function POST(req: Request) {
  const startTime = Date.now();
  let modelId = defaultModelId;
  let modelConfig = models[0];

  try {
    const body = await req.json();
    const { messages, modelId: bodyModelId } = body;
    const headerModelId = req.headers.get('X-Model-Id');
    modelId = headerModelId || bodyModelId || defaultModelId;
    modelConfig = models.find(m => m.id === modelId) || models[0];

    console.log(`[EyeKnow] Request: model=${modelId}, provider=${modelConfig.provider}, baseURL=${modelConfig.baseURL}, messages=${messages?.length || 0}`);

    const provider = createOpenAI({
      baseURL: modelConfig.baseURL,
      apiKey: modelConfig.apiKey,
    });

    console.log(`[EyeKnow] Creating streamText with modelId=${modelConfig.modelId}...`);

    const result = streamText({
      model: provider(modelConfig.modelId),
      system: systemPrompt,
      messages,
    });

    console.log(`[EyeKnow] Stream created in ${Date.now() - startTime}ms, returning response`);

    return result.toTextStreamResponse();
  } catch (error: unknown) {
    const err = error as Error & { cause?: unknown; code?: string; status?: number };
    console.error(`[EyeKnow] ERROR: model=${modelId}, baseURL=${modelConfig?.baseURL}`);
    console.error(`[EyeKnow] Error name: ${err.name}`);
    console.error(`[EyeKnow] Error message: ${err.message}`);
    console.error(`[EyeKnow] Error code: ${err.code || 'N/A'}`);
    console.error(`[EyeKnow] Error cause: ${JSON.stringify(err.cause) || 'N/A'}`);
    console.error(`[EyeKnow] Stack: ${err.stack}`);
    console.error(`[EyeKnow] Time elapsed: ${Date.now() - startTime}ms`);

    return new Response(
      JSON.stringify({
        error: true,
        model: modelId,
        baseURL: modelConfig?.baseURL,
        message: err.message,
        code: err.code || 'UNKNOWN',
        elapsed: Date.now() - startTime,
      }),
      {
        status: err.status || 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { models, defaultModelId } from '@/lib/models';
import { systemPrompt } from '@/lib/prompts';

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, modelId: bodyModelId } = await req.json();
  const headerModelId = req.headers.get('X-Model-Id');
  const modelId = headerModelId || bodyModelId || defaultModelId;
  const modelConfig = models.find(m => m.id === modelId) || models[0];

  const provider = createOpenAI({
    baseURL: modelConfig.baseURL,
    apiKey: modelConfig.apiKey,
  });

  const result = streamText({
    model: provider(modelConfig.modelId),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}

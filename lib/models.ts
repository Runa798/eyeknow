export interface ModelConfig {
  id: string;
  name: string;
  provider: 'openai-compatible' | 'google';
  baseURL?: string;
  apiKey: string;
  modelId: string;
  supportsVision: boolean;
  description: string;
}

export const models: ModelConfig[] = [
  {
    id: 'grok-fast',
    name: 'Grok 4.1 Fast',
    provider: 'openai-compatible',
    baseURL: 'http://13.223.178.20:8000/v1',
    apiKey: 'Lk4FJKW870W0Eda7eUqdTDQ8xAM70lt5',
    modelId: 'grok-4.1-fast',
    supportsVision: true,
    description: '快速响应，适合日常咨询',
  },
  {
    id: 'grok-expert',
    name: 'Grok 4.1 Expert',
    provider: 'openai-compatible',
    baseURL: 'http://13.223.178.20:8000/v1',
    apiKey: 'Lk4FJKW870W0Eda7eUqdTDQ8xAM70lt5',
    modelId: 'grok-4.1-expert',
    supportsVision: true,
    description: '深度分析，适合复杂处方解读',
  },
  {
    id: 'gemini-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'openai-compatible',
    baseURL: 'https://undyapi.com/v1',
    apiKey: 'sk-FO6MIy3cqNwzYj5hUh5STYtTMrfHlZGywn4kV4Auxe0bGoyE',
    modelId: 'gemini-3.1-pro-preview',
    supportsVision: true,
    description: '长上下文，适合详细攻略解读',
  },
  {
    id: 'gemini-flash',
    name: 'Gemini 3 Flash',
    provider: 'openai-compatible',
    baseURL: 'https://undyapi.com/v1',
    apiKey: 'sk-FO6MIy3cqNwzYj5hUh5STYtTMrfHlZGywn4kV4Auxe0bGoyE',
    modelId: 'gemini-3-flash-preview',
    supportsVision: true,
    description: '极速响应',
  },
];

export const defaultModelId = 'grok-fast';

'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

const modelOptions = [
  { id: 'grok-fast', name: 'Grok 4.1 Fast' },
  { id: 'grok-expert', name: 'Grok 4.1 Expert' },
  { id: 'gemini-pro', name: 'Gemini 3.1 Pro' },
  { id: 'gemini-flash', name: 'Gemini 3 Flash' },
];

export default function ChatPage() {
  const [modelId, setModelId] = useState('grok-fast');
  const [input, setInput] = useState('');

  const { messages, sendMessage, status } = useChat();

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput('');
    sendMessage(
      { text },
      { body: { modelId } }
    );
  };

  const getTextContent = (m: (typeof messages)[number]) => {
    return m.parts
      ?.filter((p): p is { type: 'text'; text: string } => p.type === 'text')
      .map(p => p.text)
      .join('') || '';
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-xl font-bold">AI 配镜咨询</h1>
        <select
          value={modelId}
          onChange={e => setModelId(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white"
        >
          {modelOptions.map(m => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <p className="text-4xl mb-4">👓</p>
            <p>你好！我是 EyeKnow 配镜专家。</p>
            <p className="text-sm mt-2">告诉我你的验光数据、用眼场景和预算，我来帮你选镜片。</p>
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
              m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800'
            }`}>
              {getTextContent(m)}
            </div>
          </div>
        ))}
        {isLoading && messages.length > 0 && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-400">思考中...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 pt-4 border-t border-gray-200">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="输入你的配镜问题..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          发送
        </button>
      </form>
    </div>
  );
}

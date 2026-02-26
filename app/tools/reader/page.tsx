'use client';

import { useState } from 'react';

export default function ReaderPage() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const analyze = async () => {
    if (!image) return;
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modelId: 'grok-fast',
          messages: [{
            role: 'user',
            content: [
              { type: 'text', text: '请解析这张验光单图片，提取所有数据（SPH、CYL、AXIS、PD等），并给出度数分析和镜片推荐建议。' },
              { type: 'image_url', image_url: { url: image } },
            ],
          }],
        }),
      });
      const text = await res.text();
      setResult(text);
    } catch (e) {
      setResult('解析失败，请重试');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">📋 验光单解读</h1>

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        onClick={() => document.getElementById('file-input')?.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 transition-colors"
      >
        {image ? (
          <img src={image} alt="验光单" className="max-h-64 mx-auto rounded-lg" />
        ) : (
          <div className="text-gray-400">
            <p className="text-4xl mb-2">📷</p>
            <p>点击或拖拽上传验光单图片</p>
          </div>
        )}
        <input id="file-input" type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>

      {image && (
        <button onClick={analyze} disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
          {loading ? '解析中...' : '🔍 AI 解析验光单'}
        </button>
      )}

      {result && (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="font-semibold mb-3">解析结果</h2>
          <div className="text-sm whitespace-pre-wrap text-gray-700">{result}</div>
          <a href="/chat" className="inline-block mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            💬 进入 AI 咨询，深入讨论
          </a>
        </div>
      )}
    </div>
  );
}

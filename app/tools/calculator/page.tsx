'use client';

import { useState } from 'react';

export default function CalculatorPage() {
  const [frameWidth, setFrameWidth] = useState('');
  const [bridgeWidth, setBridgeWidth] = useState('');
  const [pd, setPd] = useState('');

  const fw = parseFloat(frameWidth) || 0;
  const bw = parseFloat(bridgeWidth) || 0;
  const pdv = parseFloat(pd) || 0;
  const decentration = fw && bw && pdv ? (fw + bw - pdv) / 2 : null;

  const getLevel = (d: number) => {
    if (d <= 2) return { label: '✅ 非常合适', color: 'text-green-600', bg: 'bg-green-50' };
    if (d <= 3) return { label: '✅ 合适', color: 'text-green-600', bg: 'bg-green-50' };
    if (d <= 5) return { label: '⚠️ 勉强可以，建议换小框', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: '❌ 强烈建议换小框', color: 'text-red-600', bg: 'bg-red-50' };
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold">📐 移心量计算器</h1>
      <p className="text-sm text-gray-500">移心量 = (镜框单片宽度 + 鼻梁宽度 - 瞳距) / 2</p>

      <div className="space-y-4 bg-white p-6 rounded-xl border border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">镜框单片宽度 (mm)</label>
          <input type="number" value={frameWidth} onChange={e => setFrameWidth(e.target.value)} placeholder="如：52" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">鼻梁宽度 (mm)</label>
          <input type="number" value={bridgeWidth} onChange={e => setBridgeWidth(e.target.value)} placeholder="如：18" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">瞳距 PD (mm)</label>
          <input type="number" value={pd} onChange={e => setPd(e.target.value)} placeholder="如：64" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
        </div>
      </div>

      {decentration !== null && (
        <div className={`p-6 rounded-xl border ${getLevel(decentration).bg}`}>
          <div className="text-3xl font-bold mb-2">{decentration.toFixed(1)} mm</div>
          <div className={`text-lg font-medium ${getLevel(decentration).color}`}>{getLevel(decentration).label}</div>
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 space-y-2">
        <p className="font-medium">💡 科普</p>
        <p>移心量越大，镜片边缘越厚，光学效果越差。建议控制在 3mm 以内。</p>
        <p>镜框参数通常标注在镜腿内侧，格式如 52□18-140（宽□桥-腿长）。</p>
      </div>
    </div>
  );
}

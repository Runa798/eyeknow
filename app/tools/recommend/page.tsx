'use client';

import { useState } from 'react';

interface Lens {
  brand: string; model: string; refractiveIndex: number; abbeNumber: number;
  material: string; coating: string; priceRange: [number, number];
  suitableFor: { myopiaMin: number; myopiaMax: number; astigmatismMax: number };
  tier: 'budget' | 'mid' | 'premium' | 'luxury'; notes: string;
}

const lensDatabase: Lens[] = [
  { brand: '凯米', model: 'U2', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '标准绿膜', priceRange: [80, 120], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'budget', notes: '性价比之王' },
  { brand: '伟星', model: '碳晶', refractiveIndex: 1.50, abbeNumber: 58, material: 'CR-39', coating: '标准', priceRange: [70, 100], suitableFor: { myopiaMin: 0, myopiaMax: 300, astigmatismMax: 100 }, tier: 'budget', notes: '超低度数最佳' },
  { brand: '依视路', model: '钻晶膜岩', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '钻晶膜岩', priceRange: [250, 350], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'mid', notes: '含框套餐性价比高' },
  { brand: '明月', model: 'PMC', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: 'PMC超亮', priceRange: [150, 250], suitableFor: { myopiaMin: 0, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '国产性价比' },
  { brand: '蔡司', model: '泽锐', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [600, 900], suitableFor: { myopiaMin: 200, myopiaMax: 800, astigmatismMax: 300 }, tier: 'premium', notes: '散光导向设计' },
  { brand: '蔡司', model: '智锐定制版', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [1500, 2500], suitableFor: { myopiaMin: 0, myopiaMax: 1200, astigmatismMax: 400 }, tier: 'luxury', notes: '必须定制版！' },
  { brand: '凯米', model: 'U6', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '标准绿膜', priceRange: [150, 220], suitableFor: { myopiaMin: 400, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '中高度数性价比' },
  { brand: '蔡司', model: '泽锐', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '铂金膜', priceRange: [800, 1200], suitableFor: { myopiaMin: 400, myopiaMax: 1000, astigmatismMax: 300 }, tier: 'premium', notes: '高度数+散光平衡' },
  { brand: '凯米', model: 'U7', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '标准', priceRange: [300, 450], suitableFor: { myopiaMin: 600, myopiaMax: 1200, astigmatismMax: 200 }, tier: 'mid', notes: '超高度数性价比' },
  { brand: '蔡司', model: '智锐定制版', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '铂金膜', priceRange: [2500, 4000], suitableFor: { myopiaMin: 600, myopiaMax: 1500, astigmatismMax: 400 }, tier: 'luxury', notes: '超高度数终极方案' },
];

const tierLabels: Record<string, string> = { budget: '💰 经济之选', mid: '⭐ 中端推荐', premium: '🏆 高端优选', luxury: '👑 奢华定制' };
const tierOrder = ['budget', 'mid', 'premium', 'luxury'];

export default function RecommendPage() {
  const [myopia, setMyopia] = useState(300);
  const [astigmatism, setAstigmatism] = useState(0);
  const [budget, setBudget] = useState(2000);

  const filtered = lensDatabase.filter(l =>
    myopia >= l.suitableFor.myopiaMin && myopia <= l.suitableFor.myopiaMax &&
    astigmatism <= l.suitableFor.astigmatismMax && l.priceRange[0] <= budget
  );

  const grouped = tierOrder.map(t => ({ tier: t, lenses: filtered.filter(l => l.tier === t) })).filter(g => g.lenses.length > 0);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🔍 镜片推荐</h1>
      <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">近视度数: {myopia}°</label>
          <input type="range" min={0} max={1500} step={25} value={myopia} onChange={e => setMyopia(+e.target.value)} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">散光度数: {astigmatism}°</label>
          <input type="range" min={0} max={400} step={25} value={astigmatism} onChange={e => setAstigmatism(+e.target.value)} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">预算: ¥{budget}</label>
          <input type="range" min={0} max={5000} step={100} value={budget} onChange={e => setBudget(+e.target.value)} className="w-full" />
        </div>
      </div>

      {grouped.length === 0 ? (
        <p className="text-center text-gray-400 py-8">没有匹配的镜片，请调整筛选条件</p>
      ) : grouped.map(g => (
        <div key={g.tier}>
          <h2 className="text-lg font-semibold mb-3">{tierLabels[g.tier]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {g.lenses.map((l, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-gray-900">{l.brand} {l.model}</div>
                  <div className="text-sm text-blue-600 font-medium">¥{l.priceRange[0]}-{l.priceRange[1]}</div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>折射率 {l.refractiveIndex} · 阿贝数 {l.abbeNumber} · {l.material}</p>
                  <p>膜层: {l.coating}</p>
                  <p className="text-gray-700 font-medium">{l.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

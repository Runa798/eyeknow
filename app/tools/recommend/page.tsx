'use client';

import { useState } from 'react';
import { lensDatabase, tierLabels, type Lens } from '@/lib/lens-data';

const tierOrder = ['budget', 'mid', 'premium', 'luxury'];

export default function RecommendPage() {
  const [myopia, setMyopia] = useState(300);
  const [astigmatism, setAstigmatism] = useState(0);
  const [budget, setBudget] = useState(2000);
  const [isKids, setIsKids] = useState(false);

  const filtered = lensDatabase.filter(l =>
    myopia >= l.suitableFor.myopiaMin && myopia <= l.suitableFor.myopiaMax &&
    astigmatism <= l.suitableFor.astigmatismMax && l.priceRange[0] <= budget &&
    (isKids ? (l.category === 'kids' || l.category === 'both') : (l.category !== 'kids'))
  );

  const grouped = tierOrder.map(t => ({ tier: t, lenses: filtered.filter(l => l.tier === t) })).filter(g => g.lenses.length > 0);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🔍 镜片推荐</h1>
      <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={isKids} onChange={e => setIsKids(e.target.checked)} className="rounded" />
            <span>儿童/青少年近视防控</span>
          </label>
        </div>
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
          <input type="range" min={0} max={6000} step={100} value={budget} onChange={e => setBudget(+e.target.value)} className="w-full" />
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

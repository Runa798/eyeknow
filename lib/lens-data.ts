export interface Lens {
  brand: string;
  model: string;
  refractiveIndex: number;
  abbeNumber: number;
  material: string;
  coating: string;
  priceRange: [number, number];
  suitableFor: { myopiaMin: number; myopiaMax: number; astigmatismMax: number };
  tier: 'budget' | 'mid' | 'premium' | 'luxury';
  notes: string;
}

export const lensDatabase: Lens[] = [
  { brand: '凯米', model: 'U2', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '标准绿膜', priceRange: [80, 120], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'budget', notes: '性价比之王，低度数首选' },
  { brand: '伟星', model: '碳晶', refractiveIndex: 1.50, abbeNumber: 58, material: 'CR-39', coating: '标准', priceRange: [70, 100], suitableFor: { myopiaMin: 0, myopiaMax: 300, astigmatismMax: 100 }, tier: 'budget', notes: '超低度数最佳选择，阿贝数高' },
  { brand: '依视路', model: '钻晶膜岩', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '钻晶膜岩', priceRange: [250, 350], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'mid', notes: '含框套餐性价比高' },
  { brand: '依视路', model: '视满分', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '视满分', priceRange: [350, 500], suitableFor: { myopiaMin: 200, myopiaMax: 800, astigmatismMax: 200 }, tier: 'mid', notes: '中度近视优选' },
  { brand: '明月', model: 'PMC', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: 'PMC超亮', priceRange: [150, 250], suitableFor: { myopiaMin: 0, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '国产性价比，膜层不错' },
  { brand: '蔡司', model: '泽锐', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [600, 900], suitableFor: { myopiaMin: 200, myopiaMax: 800, astigmatismMax: 300 }, tier: 'premium', notes: '大散光优选，散光导向设计' },
  { brand: '蔡司', model: '智锐定制版', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [1500, 2500], suitableFor: { myopiaMin: 0, myopiaMax: 1200, astigmatismMax: 400 }, tier: 'luxury', notes: '必须是定制版！库存片=普通镜片' },
  { brand: '凯米', model: 'U6', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '标准绿膜', priceRange: [150, 220], suitableFor: { myopiaMin: 400, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '中高度数性价比选择' },
  { brand: '蔡司', model: '泽锐', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '铂金膜', priceRange: [800, 1200], suitableFor: { myopiaMin: 400, myopiaMax: 1000, astigmatismMax: 300 }, tier: 'premium', notes: '高度数+散光的最佳平衡' },
  { brand: '凯米', model: 'U7', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '标准', priceRange: [300, 450], suitableFor: { myopiaMin: 600, myopiaMax: 1200, astigmatismMax: 200 }, tier: 'mid', notes: '超高度数性价比之选' },
  { brand: '蔡司', model: '智锐定制版', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '铂金膜', priceRange: [2500, 4000], suitableFor: { myopiaMin: 600, myopiaMax: 1500, astigmatismMax: 400 }, tier: 'luxury', notes: '超高度数终极方案' },
];

export const tierLabels: Record<string, string> = {
  budget: '💰 经济之选',
  mid: '⭐ 中端推荐',
  premium: '🏆 高端优选',
  luxury: '👑 奢华定制',
};

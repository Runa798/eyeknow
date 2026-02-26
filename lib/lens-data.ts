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
  category?: 'adult' | 'kids' | 'both';
}

export const lensDatabase: Lens[] = [
  // === 经济型 ===
  { brand: '伟星', model: '碳晶 1.50', refractiveIndex: 1.50, abbeNumber: 58, material: 'CR-39', coating: '标准', priceRange: [70, 100], suitableFor: { myopiaMin: 0, myopiaMax: 300, astigmatismMax: 100 }, tier: 'budget', notes: '超低度数最佳，阿贝数58色散极小', category: 'adult' },
  { brand: '鸿晨', model: '经济 1.56', refractiveIndex: 1.56, abbeNumber: 38, material: '树脂', coating: '标准绿膜', priceRange: [60, 150], suitableFor: { myopiaMin: 0, myopiaMax: 400, astigmatismMax: 200 }, tier: 'budget', notes: '超低价位，适合临时/备用', category: 'adult' },
  { brand: '鸿晨', model: '经济 1.60', refractiveIndex: 1.60, abbeNumber: 36, material: '树脂', coating: '标准绿膜', priceRange: [100, 220], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 300 }, tier: 'budget', notes: '中规中矩，品牌知名度较低', category: 'adult' },
  { brand: '凯米', model: 'U2 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '标准绿膜', priceRange: [80, 120], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'budget', notes: '性价比之王，低度数首选', category: 'adult' },
  { brand: '凯米', model: 'U6 1.67', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '标准绿膜', priceRange: [150, 220], suitableFor: { myopiaMin: 400, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '中高度数性价比选择', category: 'adult' },
  { brand: '万新', model: '超韧 1.56', refractiveIndex: 1.56, abbeNumber: 38, material: '树脂', coating: '多层膜', priceRange: [80, 180], suitableFor: { myopiaMin: 0, myopiaMax: 400, astigmatismMax: 200 }, tier: 'budget', notes: '入门耐用款，韧性强', category: 'adult' },
  { brand: '明月', model: 'PMC 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: 'PMC超亮', priceRange: [150, 250], suitableFor: { myopiaMin: 0, myopiaMax: 800, astigmatismMax: 200 }, tier: 'budget', notes: '国产性价比，膜层不错', category: 'adult' },

  // === 中端 ===
  { brand: '万新', model: '超韧MR-8 1.60', refractiveIndex: 1.60, abbeNumber: 40, material: 'MR-8', coating: '多层防蓝/绿膜', priceRange: [150, 280], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 400 }, tier: 'mid', notes: '韧性强，线上热销', category: 'adult' },
  { brand: '万新', model: '超韧 1.67', refractiveIndex: 1.67, abbeNumber: 32, material: '高折树脂', coating: '多层膜', priceRange: [250, 450], suitableFor: { myopiaMin: 300, myopiaMax: 800, astigmatismMax: 400 }, tier: 'mid', notes: '中高度适用，较薄', category: 'adult' },
  { brand: '依视路', model: '钻晶膜岩 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '钻晶膜岩', priceRange: [250, 350], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 200 }, tier: 'mid', notes: '含框套餐性价比高', category: 'adult' },
  { brand: '依视路', model: '视满分 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '视满分', priceRange: [350, 500], suitableFor: { myopiaMin: 200, myopiaMax: 800, astigmatismMax: 200 }, tier: 'mid', notes: '中度近视优选', category: 'adult' },
  { brand: '凯米', model: 'U2 1.67', refractiveIndex: 1.67, abbeNumber: 32, material: '高折树脂', coating: '标准绿膜', priceRange: [180, 350], suitableFor: { myopiaMin: 300, myopiaMax: 900, astigmatismMax: 400 }, tier: 'mid', notes: '高折性价比，薄度不错', category: 'adult' },
  { brand: '凯米', model: 'U2 1.74', refractiveIndex: 1.74, abbeNumber: 33, material: '超高折树脂', coating: '多层绿膜', priceRange: [350, 600], suitableFor: { myopiaMin: 600, myopiaMax: 1200, astigmatismMax: 600 }, tier: 'mid', notes: '超高度首选，性价比突出', category: 'adult' },
  { brand: '凯米', model: 'U7 1.74', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '标准', priceRange: [300, 450], suitableFor: { myopiaMin: 600, myopiaMax: 1200, astigmatismMax: 200 }, tier: 'mid', notes: '超高度数性价比之选', category: 'adult' },
  { brand: '依视路', model: '好学生 1.59', refractiveIndex: 1.59, abbeNumber: 30, material: '聚碳酸酯', coating: '钻晶A4', priceRange: [800, 1500], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 300 }, tier: 'mid', notes: '学生抗疲劳，PC材质抗冲击', category: 'kids' },

  // === 高端 ===
  { brand: '蔡司', model: '泽锐 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [600, 900], suitableFor: { myopiaMin: 200, myopiaMax: 800, astigmatismMax: 300 }, tier: 'premium', notes: '大散光优选，散光导向设计', category: 'adult' },
  { brand: '蔡司', model: '泽锐 1.67', refractiveIndex: 1.67, abbeNumber: 32, material: 'MR-7', coating: '铂金膜', priceRange: [800, 1200], suitableFor: { myopiaMin: 400, myopiaMax: 1000, astigmatismMax: 300 }, tier: 'premium', notes: '高度数+散光的最佳平衡', category: 'adult' },
  { brand: '蔡司', model: '新清锐 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '莲花铂金膜', priceRange: [1800, 3200], suitableFor: { myopiaMin: 0, myopiaMax: 700, astigmatismMax: 400 }, tier: 'premium', notes: '清晰锐利，膜层顶级', category: 'adult' },
  { brand: '蔡司', model: '驾驶型 1.60', refractiveIndex: 1.60, abbeNumber: 40, material: '树脂', coating: '夜视优化多层', priceRange: [2200, 3800], suitableFor: { myopiaMin: 0, myopiaMax: 800, astigmatismMax: 500 }, tier: 'premium', notes: '夜间驾驶优化眩光', category: 'adult' },
  { brand: '豪雅', model: '锐美 VP 1.50', refractiveIndex: 1.50, abbeNumber: 58, material: '树脂', coating: 'VP膜', priceRange: [1100, 1600], suitableFor: { myopiaMin: 0, myopiaMax: 300, astigmatismMax: 200 }, tier: 'premium', notes: '超高阿贝数，成像极清晰', category: 'adult' },
  { brand: '豪雅', model: '锐美 VP 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: 'VP膜', priceRange: [1900, 2600], suitableFor: { myopiaMin: 200, myopiaMax: 700, astigmatismMax: 400 }, tier: 'premium', notes: '中高折平衡，清晰耐用', category: 'adult' },
  { brand: '依视路', model: '爱赞全晰 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '钻晶数码智能', priceRange: [1400, 2200], suitableFor: { myopiaMin: 0, myopiaMax: 700, astigmatismMax: 400 }, tier: 'premium', notes: '智能防蓝+清晰，办公学习强', category: 'adult' },
  { brand: '明月', model: '1.71 PMC超亮', refractiveIndex: 1.71, abbeNumber: 37, material: 'PMC树脂', coating: '天视A6高透', priceRange: [600, 1200], suitableFor: { myopiaMin: 400, myopiaMax: 1000, astigmatismMax: 500 }, tier: 'premium', notes: '高折+高阿贝平衡王者，国产天花板', category: 'adult' },

  // === 奢华定制 ===
  { brand: '蔡司', model: '智锐定制版 1.60', refractiveIndex: 1.60, abbeNumber: 42, material: 'MR-8', coating: '铂金膜', priceRange: [1500, 2500], suitableFor: { myopiaMin: 0, myopiaMax: 1200, astigmatismMax: 400 }, tier: 'luxury', notes: '必须是定制版！库存片=普通镜片', category: 'adult' },
  { brand: '蔡司', model: '智锐定制版 1.74', refractiveIndex: 1.74, abbeNumber: 33, material: 'MR-174', coating: '铂金膜', priceRange: [2500, 4000], suitableFor: { myopiaMin: 600, myopiaMax: 1500, astigmatismMax: 400 }, tier: 'luxury', notes: '超高度数终极方案', category: 'adult' },

  // === 儿童近视防控镜片 ===
  { brand: '豪雅', model: '新乐学 MS', refractiveIndex: 1.59, abbeNumber: 40, material: 'PC树脂', coating: '多层防蓝/控近视', priceRange: [2800, 4800], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 400 }, tier: 'premium', notes: '儿童近视管理，DIMS离焦设计，延缓率约59%', category: 'kids' },
  { brand: '蔡司', model: '小乐圆', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '钻立方', priceRange: [4000, 5500], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 400 }, tier: 'luxury', notes: 'CARE技术同心环离焦，延缓率约54-71%', category: 'kids' },
  { brand: '蔡司', model: '成长乐', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '钻立方', priceRange: [3000, 4800], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 300 }, tier: 'premium', notes: '周边视力控制+渐进离焦，延缓率约30-44%', category: 'kids' },
  { brand: '依视路', model: '星趣控', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '钻晶', priceRange: [3280, 4800], suitableFor: { myopiaMin: 0, myopiaMax: 800, astigmatismMax: 400 }, tier: 'premium', notes: 'HALT 1021微透镜，延缓率约65-67%，中高度近视效果突出', category: 'kids' },
  { brand: '明月', model: '轻松控Pro', refractiveIndex: 1.60, abbeNumber: 42, material: '树脂', coating: '高透防污', priceRange: [2500, 3800], suitableFor: { myopiaMin: 0, myopiaMax: 600, astigmatismMax: 400 }, tier: 'premium', notes: '国产平替，1295微透镜，延缓率约73%（厂商数据）', category: 'kids' },
];

export const tierLabels: Record<string, string> = {
  budget: '💰 经济之选',
  mid: '⭐ 中端推荐',
  premium: '🏆 高端优选',
  luxury: '👑 奢华定制',
};

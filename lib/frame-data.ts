export interface Frame {
  material: string;
  pros: string;
  cons: string;
  weightRange: string;
  priceRange: [number, number];
  suitableFor: string;
}

export const frameDatabase: Frame[] = [
  { material: '纯钛', pros: '超轻、防过敏、耐腐蚀、不易变形', cons: '成本高、调整较困难', weightRange: '10-20g', priceRange: [600, 3000], suitableFor: '高度数、敏感肌、长期佩戴' },
  { material: 'β钛', pros: '高弹性、形状记忆、易调整、抗冲击', cons: '部分镀层易磨损', weightRange: '12-25g', priceRange: [500, 2500], suitableFor: '儿童青少年、运动爱好者' },
  { material: 'TR90', pros: '超轻、超韧不易断、记忆性好、经济', cons: '不耐酒精、基本不可调整', weightRange: '8-18g', priceRange: [150, 800], suitableFor: '学生、运动、日常耐摔' },
  { material: '板材（醋酸纤维）', pros: '色彩丰富、质感高级、可塑形', cons: '较重、易受温度影响变形', weightRange: '20-40g', priceRange: [200, 2000], suitableFor: '追求时尚/复古风格' },
  { material: '合金', pros: '价格低、款式多', cons: '偏重、易过敏、易掉漆', weightRange: '25-45g', priceRange: [80, 600], suitableFor: '预算有限、短期更换' },
  { material: '不锈钢', pros: '性价比高、耐腐蚀、质感好', cons: '比钛重、调整性一般', weightRange: '20-35g', priceRange: [200, 1000], suitableFor: '日常通勤、预算中等' },
];

export const faceShapeGuide: Record<string, string> = {
  '圆脸': '方框、多边形、棱角分明（避免正圆/小圆框）',
  '方脸': '圆框、椭圆框、飞行员款（避免硬方框）',
  '长脸': '高框、宽边框、圆润款（避免细窄/矮框）',
  '心形脸': '圆框、细框、下框较宽款（慎选大粗框）',
  '鹅蛋脸': '万能脸型，几乎都合适',
};

export const frameBrands = {
  budget: { range: '100-300元', brands: '施洛华、派丽蒙、海伦凯勒、木九十、USEEME' },
  mid: { range: '300-800元', brands: '暴龙、陌森、夏蒙(Charmant)、精工、雷朋' },
  premium: { range: '800元+', brands: '林德伯格(LINDBERG)、ic! berlin、999.9、Silhouette' },
};

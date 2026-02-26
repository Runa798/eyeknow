const sections = [
  {
    emoji: '🏥', title: '科学验光',
    content: '去三甲医院眼科或正规视光中心验光，最好刚睡醒后去（眼睛最放松）。必做项目：电脑验光 + 综合验光 + 主导眼测试 + 红绿视标测试。散瞳验光更准确（尤其首次配镜和青少年）。验光单有效期建议 3 个月内。',
  },
  {
    emoji: '👓', title: '镜框选择',
    content: '材质推荐纯钛或β钛（轻、耐腐蚀、不过敏）。移心量控制在 3mm 以内，超过 5mm 强烈建议换小框。高度数及高散光者避开大框和高面弯镜架。镜框参数标注在镜腿内侧：52□18-140（宽□桥-腿长）。',
  },
  {
    emoji: '🔬', title: '镜片选择',
    content: '折射率越高镜片越薄但阿贝数越低（色散越大）。300度以下选 1.56/1.60，300-600 选 1.60/1.67，600 以上选 1.67/1.74。基材：MR-8（1.60 主流）、MR-7（1.67）、MR-174（1.74）。膜层选铂金膜或钻晶膜岩级别即可。',
  },
  {
    emoji: '🚫', title: '防蓝光是智商税',
    content: '防蓝光镜片导致镜片发黄、色彩失真，对缓解视疲劳没有可靠临床证据。电子屏幕的蓝光强度远低于自然光。如果真担心蓝光，调低屏幕亮度和开启夜间模式比防蓝光镜片有效 100 倍。',
  },
  {
    emoji: '✅', title: '防伪验真',
    content: '正品蔡司/依视路镜片必须有：原厂加工单（不是店铺自己打的）、防伪码（官网/公众号可查）、镜片镭射微标（蔡司是 Z 标，依视路是 e 标）。没有原厂加工单的"品牌镜片"大概率是假货。',
  },
  {
    emoji: '🧴', title: '日常保养',
    content: '清洗：冷水冲洗 + 一滴洗洁精 + 手指轻搓 + 冷水冲净 + 纸巾吸干。禁止干擦（会磨花膜层）！禁止热水（会导致膜层脱落）！禁止用衣服/纸巾直接擦。存放时镜片朝上。',
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">📖 配镜指南</h1>
      <p className="text-gray-500">配镜避坑核心知识，帮你省钱又省心</p>
      {sections.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold mb-3">{s.emoji} {s.title}</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{s.content}</p>
        </div>
      ))}
    </div>
  );
}

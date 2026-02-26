const features = [
  { emoji: '🤖', title: 'AI 配镜咨询', desc: '多模型驱动，专业解答配镜问题', href: '/chat' },
  { emoji: '📐', title: '移心量计算器', desc: '输入镜框参数，实时计算移心量', href: '/tools/calculator' },
  { emoji: '🔍', title: '镜片推荐', desc: '根据度数和预算，智能推荐镜片', href: '/tools/recommend' },
  { emoji: '📋', title: '验光单解读', desc: '上传验光单图片，AI 自动解析', href: '/tools/reader' },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">EyeKnow 智能配镜助手</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">AI 驱动的专业配镜咨询，帮你选对眼镜、避开智商税</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <a key={f.href} href={f.href} className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="text-3xl mb-3">{f.emoji}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </a>
        ))}
      </section>
      <section className="text-center">
        <a href="/guide" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📖 查看配镜指南</a>
      </section>
    </div>
  );
}

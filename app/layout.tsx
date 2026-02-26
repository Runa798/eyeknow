import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EyeKnow 智能配镜助手',
  description: 'AI 驱动的专业配镜咨询',
};

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/chat', label: 'AI 咨询' },
  { href: '/tools/calculator', label: '移心量计算' },
  { href: '/tools/recommend', label: '镜片推荐' },
  { href: '/tools/reader', label: '验光单解读' },
  { href: '/guide', label: '配镜指南' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-600">👓 EyeKnow</a>
            <div className="hidden md:flex gap-4">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        <footer className="border-t border-gray-200 mt-12 py-6 text-center text-sm text-gray-400">
          EyeKnow · AI 配镜助手 · 仅供参考，不构成医疗建议
        </footer>
      </body>
    </html>
  );
}

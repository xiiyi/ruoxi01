import { Button } from './ui/Button';
import { Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* CTA */}
        <div className="bg-white text-black p-4 md:p-8 rounded-3xl border-3 border-white mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black px-4">有合作想法？欢迎聊聊！</h3>
            <p className="text-gray-600 px-4 mt-1">无论是内容创作、教学合作还是文化传播项目，我都很期待！</p>
          </div>
          <div className="flex-1 w-full max-w-xl flex gap-2">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="w-full h-full px-6 py-3 rounded-xl border-3 border-black font-bold focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <Button className="bg-black text-white border-black shrink-0">发送</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-pink flex items-center justify-center">
                <span className="text-white font-black text-lg">彩</span>
              </div>
              <span className="font-bold text-xl">张彩若</span>
            </div>
            <p className="text-gray-400 mb-6">
              新媒体内容创作者 · 汉语教学者 · 文化传播者
              <br />
              来自大东北的能量满满小太阳 ☀️
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, href: '#', label: '微博' },
                { icon: <Instagram size={20} />, href: '#', label: '小红书' },
                { icon: <Youtube size={20} />, href: '#', label: 'B站/抖音' },
                { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white border-2 border-black hover:translate-y-[-2px] transition-transform"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">导航</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">关于我</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">作品集</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">联系我</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">我的能力</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">新媒体内容创作</a></li>
              <li><a href="#" className="hover:text-white transition-colors">短视频剪辑制作</a></li>
              <li><a href="#" className="hover:text-white transition-colors">一线教学</a></li>
              <li><a href="#" className="hover:text-white transition-colors">文化策划与传播</a></li>
              <li><a href="#" className="hover:text-white transition-colors">公众号运营</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">联系方式</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:1740673638@qq.com" className="hover:text-white transition-colors">1740673638@qq.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+8618224453141" className="hover:text-white transition-colors">182-2445-3141</a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-bold text-lg mb-3">荣誉证书</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>🏆 网易云播客大赛全国第四名</div>
                <div>🥇 四川高校思政课一等奖</div>
                <div>🎖️ 校级演讲比赛一等奖</div>
                <div>📜 高级中学语文教师资格证</div>
                <div>📜 高级中学心理健康教育资格证</div>
                <div>🎙️ 普通话水平测试一级乙等</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <span>© {new Date().getFullYear()} 张彩若. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="text-gray-600">成都大学 · 汉语国际教育</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

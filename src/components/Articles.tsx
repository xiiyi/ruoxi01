import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Edit3, Clock, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const articles = [
  {
    title: '宠物类爆款视频',
    date: '2024.11',
    author: '张彩若',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cairuo',
    tag: '运营经验',
    readTime: '8 分钟',
    type: 'featured',
    link: 'https://v.douyin.com/P2L-vRTNvZA/',
  },
  {
    title: '普通话命题说话技巧合集',
    date: '2024.09',
    author: '张彩若',
    tag: '教学分享',
    readTime: '6 分钟',
    type: 'standard',
    link: 'https://www.xiaohongshu.com/collection/item/691a9e4a00c4000000000001?xhsshare=&appuid=6582a22a000000001b033028&apptime=1772272390&share_id=3a407345177e42d29f1f82e2983e11c7&share_channel=copy_link',
  },
  {
    title: '影视高赞混剪视频',
    date: '2024.06',
    author: '张彩若',
    tag: '视频剪辑',
    readTime: '10 分钟',
    type: 'standard',
    link: 'https://b23.tv/D95bTlF',
  },
];

const moreWorks = [
  {
    title: '明星安利类高赞视频',
    platform: '哔哩哔哩',
    link: 'https://b23.tv/6xcs0IC',
    emoji: '⭐',
    color: 'bg-brand-blue',
  },
  {
    title: '穿搭颜值类最新作品',
    platform: '抖音',
    link: 'https://v.douyin.com/kMa2fIXu7Es/',
    emoji: '👗',
    color: 'bg-brand-pink',
  },
  {
    title: '宠物接广作品示例',
    platform: '小红书',
    link: 'http://xhslink.com/o/1OodgyYhJhd',
    emoji: '🐾',
    color: 'bg-brand-yellow',
  },
];

export const Articles = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl md:text-6xl font-black">
            高赞视频展示
          </h2>
          <Button variant="outline" className="hidden md:flex items-center gap-2" onClick={() => setShowModal(true)}>
            <Edit3 size={18} />
            浏览更多作品
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <a href={articles[0].link} target="_blank" rel="noopener noreferrer">
            <Card hoverEffect className="p-8 flex flex-col h-full cursor-pointer">
              <div className="bg-gray-100 rounded-xl border-3 border-black mb-8 aspect-video relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-black text-white px-4 py-1 rounded-full font-bold text-sm z-10">
                  {articles[0].tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                    <span className="text-5xl">🐾</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl font-bold mb-6 leading-tight hover:text-brand-blue transition-colors">
                  {articles[0].title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow border-2 border-black overflow-hidden shrink-0">
                    <img src={articles[0].authorAvatar} alt={articles[0].author} />
                  </div>
                  <div>
                    <div className="font-bold">{articles[0].author}</div>
                    <div className="text-gray-500 text-sm flex items-center gap-2">
                      <span>{articles[0].date}</span>
                      <span>·</span>
                      <Clock size={12} />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </a>

          {/* Side Articles */}
          <div className="flex flex-col gap-8">
            {articles.slice(1).map((article, index) => (
              <a key={index} href={article.link} target="_blank" rel="noopener noreferrer">
                <Card hoverEffect className="p-6 grid md:grid-cols-2 gap-6 items-center cursor-pointer">
                  <div className="bg-gray-100 rounded-xl border-3 border-black aspect-[4/3] relative overflow-hidden">
                    <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full font-bold text-xs z-10">
                      {article.tag}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">{index === 0 ? '🎤' : '🎬'}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 leading-tight hover:text-brand-blue transition-colors">
                      {article.title}
                    </h3>
                    <div className="text-gray-500 text-sm flex items-center gap-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={() => setShowModal(true)}>
            <Edit3 size={18} />
            浏览全部文章
          </Button>
        </div>
      </div>

      {/* Modal for More Works */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white border-3 border-black rounded-2xl neo-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full border-3 border-black bg-brand-pink text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X size={20} />
            </button>

            <h3 className="text-3xl font-black mb-2">更多作品</h3>
            <p className="text-gray-500 mb-8">点击查看完整作品内容</p>

            <div className="flex flex-col gap-5">
              {moreWorks.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card hoverEffect className="p-5 flex items-center gap-5 cursor-pointer">
                    <div className={`w-16 h-16 ${work.color} rounded-xl border-3 border-black flex items-center justify-center shrink-0`}>
                      <span className="text-3xl">{work.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold group-hover:text-brand-blue transition-colors">{work.title}</h4>
                      <p className="text-gray-500 text-sm">{work.platform}</p>
                    </div>
                    <ExternalLink size={20} className="shrink-0 text-gray-400 group-hover:text-brand-blue transition-colors" />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

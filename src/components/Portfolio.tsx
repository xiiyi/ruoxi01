import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: '宠物类视频账号运营',
    description: '从零打造宠物内容账号，深度研究爆款规律与粉丝运营策略。最高单条视频点赞56万、浏览量900万，粉丝总数约1.5万，并与宠物品牌达成商业合作。',
    tags: ['短视频运营', '内容创作'],
    bgColor: 'bg-brand-blue',
    logo: '🐾',
    metric: '900万播放',
    link: 'https://xhslink.com/m/7LXmLTwzI04',
  },
  {
    title: '普通话教学经验分享账号',
    description: '将专业技能转化为内容产品，首发经验分享系列获约7000点赞与收藏，提供普通话纠音服务帮助20+人通过测试，并与言鸟官方达成内容合作。',
    tags: ['知识分享', '个人品牌'],
    bgColor: 'bg-brand-pink',
    logo: '🎤',
    metric: '7000+收藏',
    customColor: 'bg-[#6B6BFF]',
    link: 'https://xhslink.com/m/5linAvOzVcK',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            看看我的<br />
            <span className="bg-brand-yellow px-2">内容作品</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            多个平台的自媒体实战经历，从零到一打造有影响力的内容账号。
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.logo}</div>
                    <div className="bg-brand-yellow border-2 border-black rounded-full px-4 py-1 font-black text-sm">
                      {project.metric}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      查看详情 <ArrowRight size={20} />
                    </a>
                  </div>
                </div>

                <div className={`${project.customColor || project.bgColor} border-t-3 lg:border-t-0 lg:border-l-3 border-black p-8 md:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px]`}>
                  <div className="bg-white border-3 border-black rounded-xl w-full max-w-md aspect-video shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
                    </div>
                    <div className="mt-6 w-3/4 space-y-3">
                      <div className="text-center text-5xl">{project.logo}</div>
                      <div className="h-3 bg-gray-100 rounded border border-black w-3/4 mx-auto"></div>
                      <div className="h-3 bg-gray-100 rounded border border-black w-1/2 mx-auto"></div>
                      <div className="flex gap-2 justify-center mt-4">
                        <div className="h-7 w-20 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div className="h-7 w-20 border-2 border-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional accounts stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: '明星安利账号', value: '6000+粉丝' },
            { label: '影视混剪账号', value: '2.3万点赞' },
            { label: '穿搭颜值账号', value: '2.1万粉丝' },
            { label: '普通话教学账号', value: '7000+收藏' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="text-lg sm:text-2xl font-black text-brand-blue">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-1 font-bold">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px bg-gray-300 flex-1 max-w-[120px]" />
          <span className="text-2xl">✨</span>
          <div className="h-px bg-gray-300 flex-1 max-w-[120px]" />
        </div>
      </div>
    </section>
  );
};

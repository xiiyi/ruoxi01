import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ArrowRight, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: '新媒体运营',
    company: '四川青媒聚合广告传媒有限公司',
    period: '2024.01 — 2024.06',
    description: '负责自媒体矩阵的内容策划与制作，包括原创推文撰写、短视频内容策略制定与执行；深度分析公众号后台数据，持续优化内容结构与选题方向，提升账号整体影响力。',
    icon: 'bg-brand-blue',
    hideLearnMore: true,
  },
  {
    role: '非遗文化推广员',
    company: '四川省川晋缘文化传播有限公司',
    period: '2024.06 — 2024.08',
    description: '参与"非遗进社区"项目，通过深入解读非遗文化提升居民认同感；承担川南旅游推广活动讲解任务，助力非遗文化与旅游经济融合发展。',
    icon: 'bg-brand-pink',
    hideLearnMore: true,
  },
  {
    role: '策划编辑',
    company: '成都市图书馆《父辈的南下》项目',
    period: '2024.09 — 2024.12',
    description: '深度参与历史采编，协助完成纪念图集编制与纸媒书籍出版；完成视频素材制作，在多平台发布并获广泛传播，累计播放量突破100万次。',
    icon: 'bg-brand-yellow',
    hideLearnMore: true,
  },
  {
    role: '新媒体运营',
    company: '昭昭如愿留学咨询有限公司',
    period: '2025.02 — 2025.05',
    description: '负责账号从零搭建、视频内容创作与账号运营，独立完成脚本撰写、拍摄策划及发布全流程；注重有效沟通与信息检索，快速掌握留学行业知识，精准触达目标用户群体。',
    icon: 'bg-brand-blue',
    link: 'https://v.douyin.com/PQnqDgTpwnQ/',
  },
  {
    role: '教培讲师 & 家庭教师',
    company: '教培机构 & 兼职家教',
    period: '2021 — 至今',
    description: '在教培机构承担小学至初中全科班课辅导；同期担任兼职一对一家庭教师，深入感受学校教育与家庭教育对学生成长的影响，擅长因材施教、共情沟通，灵活运用 AI 工具提升备课与授课效率。',
    icon: 'bg-brand-pink',
    link: 'http://xhslink.com/o/2AK2m6B11a',
  },
  {
    role: '兼职视频剪辑师',
    company: '自媒体 & 品牌方合作',
    period: '2022 — 至今',
    description: '承接育儿类、家庭教育类口播视频剪辑，累计完成信息流视频100余个；将兴趣技能变现，精通成本与效益核算，熟练使用剪映等工具完成全流程后期制作。',
    icon: 'bg-brand-yellow',
    hideLearnMore: true,
  },
];

export const Experience = () => {
  return (
    <section id="about" className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            了解我的<br />
            <span className="bg-brand-blue text-white px-2">工作经历</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-lg">
            横跨新媒体运营、文化传播、国际教育等多个领域，每一段经历都让我对内容创作和文化推广有了更深的理解。
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-4xl font-black text-brand-yellow">1000万+</div>
              <div className="text-gray-400 text-sm mt-1">视频累计播放量</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-2xl sm:text-4xl font-black text-brand-pink">5万+</div>
              <div className="text-gray-400 text-sm mt-1">账号粉丝总数</div>
            </div>
          </div>
          <a href="/resume.html" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Briefcase size={20} />
              查看完整简历
            </Button>
          </a>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 text-black hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{exp.period}</span>
                <div className={`w-10 h-10 rounded-full border-3 border-black ${exp.icon} flex items-center justify-center shrink-0`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
              <p className="text-brand-blue font-bold mb-3">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
              {!exp.hideLearnMore && (
                exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold flex items-center gap-2 text-sm hover:gap-4 transition-all">
                    了解更多 <ArrowRight size={16} />
                  </a>
                ) : (
                  <button className="mt-4 font-bold flex items-center gap-2 text-sm hover:gap-4 transition-all">
                    了解更多 <ArrowRight size={16} />
                  </button>
                )
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

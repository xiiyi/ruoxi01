import { Card } from './ui/Card';
import { Video, BookOpen } from 'lucide-react';

const services = [
  {
    title: '媒体内容创作和运营',
    description: '1、具备从零搭建账号、独立完成脚本编写、视频拍摄和剪辑、账号运营、社群维护等能力。\n2、拥有多平台实操经验、全媒体多领域发展，涉及传统媒体的播客、采编等。\n3、熟练运用剪映、PS、AU等软件，具备公众号排版设计、长音频剪辑等经验。',
    icon: <Video size={48} />,
    color: 'bg-brand-blue',
  },
  {
    title: '一线教学和AI融合运用',
    description: '1、汉语国际教育专业背景，具备高级中学语文及心理健康教育教师资格证、普通话水平一级乙等。\n2、具备3年的教学经验，学生群体包括中小学阶段20余名、国际学生2名、互联网普通话学员50余名，教学群人数300+。\n3、善于利用AI软件提质增效，辅助完成教学内容练习和教学游戏互动。',
    icon: <BookOpen size={48} />,
    color: 'bg-brand-pink',
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            我的<span className="bg-brand-pink text-white px-2">专业能力</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            从内容创作到一线教学，跨领域实践让我具备独特的综合视角。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} hoverEffect className="p-8 flex flex-col items-start h-full">
              <div className={`w-full aspect-[2/1] ${service.color} bg-opacity-20 rounded-xl border-3 border-black mb-8 flex items-center justify-center relative overflow-hidden group`}>
                <div className={`absolute inset-0 ${service.color} opacity-20`} />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Card } from './ui/Card';
import { Video, BookOpen, Mic } from 'lucide-react';

const services = [
  {
    title: '新媒体内容创作',
    description: '短视频脚本策划、剪辑制作与账号运营。多平台实操经验，宠物类账号最高播放量达900万。',
    icon: <Video size={48} />,
    color: 'bg-brand-blue',
  },
  {
    title: '汉语教学与推广',
    description: '汉语国际教育专业背景，具备高级中学语文及心理健康教育教师资格证、普通话水平一级乙等。UNH国际远程教学项目辅导教师，学生满意率100%，帮助20+学员通过普通话测试。',
    icon: <BookOpen size={48} />,
    color: 'bg-brand-pink',
  },
  {
    title: '文化传播与策划',
    description: '主持近千人校园活动6场，参与非遗文化推广项目，《父辈的南下》采编策划，累计播放量突破100万。',
    icon: <Mic size={48} />,
    color: 'bg-brand-yellow',
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
            从内容创作到文化传播，从汉语教学到新媒体运营，跨领域实践让我具备独特的综合视角。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hoverEffect className="p-8 flex flex-col items-start h-full">
              <div className={`w-full aspect-square ${service.color} bg-opacity-20 rounded-xl border-3 border-black mb-8 flex items-center justify-center relative overflow-hidden group`}>
                <div className={`absolute inset-0 ${service.color} opacity-20`} />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

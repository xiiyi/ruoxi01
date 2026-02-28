import { Card } from './ui/Card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        quote: "彩若老师是我见过最有耐心、最有方法的普通话老师！在她的指导下，我的普通话水平在两个月内就从二级乙等提升到了二级甲等，顺利通过了考试。",
        name: '学生 · 小李',
        title: '普通话水平测试备考学员',
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Student1&backgroundColor=transparent&clothing=collarAndSweater&clothingColor=5199e4&hairColor=000000&skinColor=f8d25c",
        bg: 'bg-brand-yellow',
    },
    {
        quote: "非常感谢彩若在《父辈的南下》项目中的贡献！她的采编工作极其认真细致，对受访老前辈们充满尊重，整理出的资料质量非常高，为项目的成功奠定了重要基础。",
        name: '项目负责人',
        title: '成都市图书馆《父辈的南下》项目组',
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager&backgroundColor=transparent&clothing=blazerShirt&clothingColor=3c4f76&hairColor=2c1b18&skinColor=ae5d29",
        bg: 'bg-brand-blue',
    },
    {
        quote: "和彩若共事的那段时间，她的执行力和创意让我印象深刻。从选题策划到拍摄剪辑，她总能高效完成，而且特别善于捕捉用户痛点，产出的内容数据表现一直很稳。团队协作中沟通也非常顺畅，是一个靠谱又有想法的搭档。",
        name: '运营同事',
        title: '昭昭如愿留学咨询有限公司',
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Colleague&backgroundColor=transparent&clothing=hoodie&clothingColor=ff488e&hairColor=2c1b18&skinColor=ffdbb4",
        bg: 'bg-brand-pink',
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-black mb-4">
                        合作伙伴<br />
                        <span className="bg-brand-blue text-white px-2">这样说</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                        学生、项目伙伴和运营同事的真实反馈，是我持续前进的最大动力。
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <Card className="p-8 md:p-16 pr-8 md:pr-48 relative z-10">
                        <div className="absolute -top-6 -left-6 bg-black text-white p-4 rounded-full border-3 border-white neo-shadow">
                            <Quote size={32} />
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                            "{t.quote}"
                        </blockquote>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-black text-xl">{t.name}</div>
                                <div className="text-gray-600">{t.title}</div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 rounded-full border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                    aria-label="上一条"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 rounded-full border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                    aria-label="下一条"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-6">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full border-2 border-black transition-all ${i === current ? 'bg-black w-6' : 'bg-white'}`}
                                    aria-label={`第 ${i + 1} 条`}
                                />
                            ))}
                        </div>
                    </Card>

                    <div className={`absolute -bottom-12 -right-4 md:-right-12 w-48 h-48 md:w-64 md:h-64 ${t.bg} rounded-full border-4 border-black z-20 overflow-hidden neo-shadow-lg hidden sm:block transition-all duration-300`}>
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover transform scale-110 translate-y-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

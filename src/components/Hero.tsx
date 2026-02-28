import { Button } from './ui/Button';
import { Mail, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-40 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            你好，我是<span className="bg-brand-pink px-2 text-white inline-block transform -rotate-1">张彩若</span>，
            <br />
            新媒体内容
            <br />
            <span className="bg-brand-blue px-2 text-white inline-block transform rotate-1">创作者</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            对文化传播领域充满热情，擅长结合新媒体技术创新推广方式。具备优秀的跨文化交流能力，善于在多任务环境中追求卓越，能快速融入团队并创造价值。
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="flex items-center gap-2" onClick={() => scrollTo('contact')}>
              <Mail size={20} />
              联系我
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center gap-2" onClick={() => scrollTo('portfolio')}>
              <FolderOpen size={20} />
              查看作品
            </Button>
          </div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative dots */}
          <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-30 hidden lg:grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-black" />
            ))}
          </div>

          <div className="aspect-square bg-brand-yellow rounded-[3rem] border-4 border-black neo-shadow-lg overflow-hidden relative">
            <div className="absolute inset-0">
              <img
                src="/avatar.jpg"
                alt="张彩若的照片"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 bg-white border-3 border-black rounded-2xl px-4 py-3 neo-shadow flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black" />
            <span className="font-bold text-sm">开放合作机会</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

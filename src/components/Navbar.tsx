import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white border-3 border-black rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl neo-shadow">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-3 border-black bg-brand-pink flex items-center justify-center">
            <span className="text-white font-black text-sm">彩</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">张彩若</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-bold">
          <a href="#" className="hover:text-brand-blue transition-colors">首页</a>
          <a href="#about" className="hover:text-brand-blue transition-colors">关于我</a>
          <a href="#portfolio" className="hover:text-brand-blue transition-colors">作品集</a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-brand-blue transition-colors">
            更多 <ChevronDown size={16} />
          </div>
          <button onClick={() => scrollTo('contact')} className="hover:text-brand-blue transition-colors font-bold">联系我</button>
        </div>

        {/* Action */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:flex items-center gap-2 !px-4 !py-2" onClick={() => scrollTo('contact')}>
            <Mail size={18} />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white border-3 border-black rounded-2xl p-6 neo-shadow md:hidden flex flex-col gap-4 font-bold text-lg z-50"
          >
            <a href="#" onClick={() => setIsOpen(false)}>首页</a>
            <a href="#about" onClick={() => setIsOpen(false)}>关于我</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>作品集</a>
            <a href="#" onClick={() => setIsOpen(false)}>更多</a>
            <button onClick={() => scrollTo('contact')} className="text-left">联系我</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

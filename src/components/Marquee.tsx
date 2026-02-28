const keywords = [
  { name: '新媒体运营', icon: 'M15 10l4.553-2.069A1 1 0 0 1 21 8.87v6.26a1 1 0 0 1-1.447.894L15 14M3 8.87a1 1 0 0 1 .553-.902L9 6v12l-5.447-2.553A1 1 0 0 1 3 14.553V8.87z' },
  { name: '短视频剪辑', icon: 'M15 10l4.553-2.069A1 1 0 0 1 21 8.87v6.26a1 1 0 0 1-1.447.894L15 14M3 8.87a1 1 0 0 1 .553-.902L9 6v12l-5.447-2.553A1 1 0 0 1 3 14.553V8.87z' },
  { name: '汉语教学', icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { name: '文化传播', icon: 'M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  { name: '账号运营', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { name: '内容策划', icon: 'M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
];

const MarqueeItem = ({ kw }: { kw: typeof keywords[0] }) => (
  <>
    <div className="flex items-center gap-3 text-3xl font-bold shrink-0">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d={kw.icon} />
      </svg>
      <span>{kw.name}</span>
    </div>
    <span className="text-brand-yellow text-3xl shrink-0">★</span>
  </>
);

export const Marquee = () => {
  return (
    <div className="bg-black text-white py-12 transform -rotate-1 origin-left w-[105vw] -ml-[2.5vw] border-y-4 border-black overflow-hidden relative z-10">
      <div
        className="flex items-center gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 25s linear infinite' }}
      >
        {[...keywords, ...keywords, ...keywords, ...keywords].map((kw, i) => (
          <MarqueeItem key={i} kw={kw} />
        ))}
      </div>
    </div>
  );
};

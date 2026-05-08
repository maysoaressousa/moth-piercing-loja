export const RelicBar = () => {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-50">
      <div className="bg-surface-high/60 backdrop-blur-xl border border-white/5 px-8 py-5 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <span className="font-serif text-xs tracking-[0.3em] uppercase">Moth Piercing</span>
        
        <div className="flex gap-6 font-sans text-[9px] uppercase tracking-widest text-secondary">
          <a href="#shop" className="hover:text-primary transition-colors">Coleções</a>
          <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
          <a href="#cart" className="hover:text-primary transition-colors underline underline-offset-4">Carrinho (0)</a>
        </div>
      </div>
    </nav>
  );
};
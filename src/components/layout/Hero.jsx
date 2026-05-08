export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      {/* Background sutilmente mais escuro para profundidade sem linhas */}
      <div className="absolute inset-0 bg-surface-lowest opacity-50 z-0"></div>
      
      <div className="relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl text-on-surface uppercase tracking-tight mb-4">
          Ritualize seu Estilo
        </h1>
        <p className="font-sans text-primary italic text-xl md:text-2xl mb-8 tracking-wide">
          Piercings que expressam sua essência
        </p>
        
        {/* O Sigilo (Botão) */}
        <button className="bg-primary-container text-white px-10 py-4 rounded-none uppercase font-sans tracking-widest transition-all hover:bg-opacity-80 hover:shadow-[inset_0_0_10px_rgba(198,198,198,0.2)]">
          Compre Agora
        </button>
      </div>
    </section>
  );
}
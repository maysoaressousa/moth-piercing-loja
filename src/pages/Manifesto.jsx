import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-[#e5e2e1] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: O Título Arquitetural */}
        <header className="mb-24 md:mb-40">
          <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-4 uppercase">
            The Nocturnal Editorial
          </p>
          <h1 className="font-serif text-6xl md:text-9xl uppercase tracking-tighter leading-none">
            O <br /> <span className="italic ml-0 md:ml-20">Manifesto</span>
          </h1>
        </header>

        {/* SEÇÃO 1: A Filosofia (Asimetria e Tonal Layering) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start">
          <div className="md:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl uppercase tracking-tight">A Catedral Digital</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed tracking-wide">
              Não somos apenas uma marca de adornos; somos um santuário para a autoexpressão radical. A Moth Piercing nasce da intersecção entre o peso da arquitetura gótica e a precisão da joalharia moderna.
            </p>
            <p className="font-sans text-sm text-secondary leading-relaxed tracking-wide">
              Acreditamos que a beleza não reside na luz, mas na profundidade das sombras. Cada joia de titânio que curamos é um sigilo de identidade, forjado para durar tanto quanto o espírito de quem a usa.
            </p>
          </div>
          
          <div className="md:col-span-7 aspect-[4/5] bg-surface-lowest overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop" 
              alt="Estética Gótica" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-50 hover:opacity-80 transition-opacity duration-1000"
            />
          </div>
        </section>

        {/* SEÇÃO 2: Os Pilares (Grid Sem Linhas) */}
        <section className="py-20 bg-surface-lowest -mx-6 md:-mx-12 px-6 md:px-12 mb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="font-serif text-4xl italic text-primary-container">01.</span>
              <h3 className="font-serif text-xl uppercase tracking-widest">Ancestralidade</h3>
              <p className="font-sans text-xs text-secondary leading-loose uppercase tracking-widest">
                Resgatamos o simbolismo milenar do adorno corporal, tratando cada perfuração como um ritual de passagem.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-serif text-4xl italic text-primary-container">02.</span>
              <h3 className="font-serif text-xl uppercase tracking-widest">Precisão</h3>
              <p className="font-sans text-xs text-secondary leading-loose uppercase tracking-widest">
                Utilizamos apenas titânio de grau implante. A segurança biológica é a fundação sobre a qual erguemos nossa arte.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-serif text-4xl italic text-primary-container">03.</span>
              <h3 className="font-serif text-xl uppercase tracking-widest">Escuridão</h3>
              <p className="font-sans text-xs text-secondary leading-loose uppercase tracking-widest">
                Nossa estética é um tributo ao oculto, ao alternativo e ao que permanece eterno através dos séculos.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER DO MANIFESTO: Chamada para o Ritual */}
        <footer className="text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter italic">
            Pronto para o seu ritual?
          </h2>
          <Link to="/">
            <Button variant="primary">Voltar às Coleções</Button>
          </Link>
        </footer>

      </div>
    </div>
  );
}
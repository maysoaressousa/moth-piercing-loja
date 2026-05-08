import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { RelicBar } from './components/layout/RelicBar';
import { ProductCard } from './components/product/ProductCard';
import { Button } from './components/ui/Button';

// Mock de dados para a vitrine (Piercings de Titânio)
const BESTSELLERS = [
  { id: 1, name: "Vampire Heart Choker", price: 159.00, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Void Seeker Ring", price: 143.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Lunar Cult Fedora", price: 320.00, image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Coven Chain Boots", price: 588.00, image: "https://images.unsplash.com/photo-1605812383198-051f77793d11?q=80&w=1000&auto=format&fit=crop" },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-[#e5e2e1] font-sans selection:bg-primary-container selection:text-white">
      
      {/* 1. Header & Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section: Ritualize seu Estilo */}
        <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-surface-lowest/40 z-0" />
          
          <div className="relative z-10 max-w-5xl">
            <h1 className="font-serif text-6xl md:text-8xl uppercase tracking-tighter mb-4 leading-none">
              Ritualize seu <br /> Estilo
            </h1>
            <p className="font-serif italic text-primary text-xl md:text-2xl mb-10 tracking-wide">
              Piercings que expressam sua essência
            </p>
            <Button variant="primary">Compre Agora</Button>
          </div>
        </section>

        {/* 3. Seção Editorial: Explore the Abyss (Espaçamento 16/5.5rem) */}
        <section className="py-16 bg-surface-lowest px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 flex justify-between items-end">
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] text-secondary mb-2 uppercase">Curated Collections</p>
                <h2 className="font-serif text-4xl uppercase tracking-tight">Explore the Abyss</h2>
              </div>
            </header>

            {/* Layout Assimétrico para o visual High-End */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 aspect-video bg-surface-low overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Editorial" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-1000"
                />
              </div>
              <div className="md:col-span-5 space-y-8">
                <h3 className="font-serif text-2xl italic">"A beleza reside no que é eterno e sombrio."</h3>
                <p className="font-sans text-sm text-secondary leading-relaxed tracking-wide">
                  Nossas peças em titânio de grau implante são forjadas para aqueles que encontram conforto nas sombras. Cada joia é um amuleto de autoexpressão radical.
                </p>
                <Button variant="secondary">Ler Manifesto</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Vitrine de Bestsellers (Espaçamento 12/4rem) */}
        <section className="py-12 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline mb-12">
              <h2 className="font-serif text-3xl uppercase tracking-tight">Bestsellers</h2>
              <a href="#all" className="font-sans text-[10px] tracking-widest uppercase hover:text-primary transition-colors">Ver todos</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {BESTSELLERS.map((product) => (
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer / Floating Relic Bar */}
      <RelicBar />

      {/* Footer Estático (Opcional, seguindo o Manual) */}
      <footer className="py-16 px-6 md:px-12 bg-surface-lowest text-center">
        <p className="font-serif text-xs tracking-widest text-secondary opacity-50 uppercase">
          &copy; {new Date().getFullYear()} Moth Piercing — Digital Cathedral Studio.
        </p>
      </footer>
    </div>
  );
}

export default App;
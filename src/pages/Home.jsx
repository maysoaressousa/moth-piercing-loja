import React from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';

const BESTSELLERS = [
  { id: 1, name: "Vampire Heart Choker", price: 159.00, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Void Seeker Ring", price: 143.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Lunar Cult Fedora", price: 320.00, image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Coven Chain Boots", price: 588.00, image: "https://images.unsplash.com/photo-1605812383198-051f77793d11?q=80&w=1000&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Seção Editorial - Espaçamento 16 (5.5rem) */}
      <section className="py-16 bg-surface-lowest px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 aspect-video bg-surface-low overflow-hidden">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60" alt="Editorial" />
          </div>
          <div className="md:col-span-5 space-y-8">
            <h3 className="font-serif text-2xl italic">"A beleza reside no que é eterno e sombrio."</h3>
            <Button variant="secondary">Ler Manifesto</Button>
          </div>
        </div>
      </section>

      {/* Vitrine Bestsellers - Espaçamento 12 (4rem) */}
      <section className="py-12 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl uppercase tracking-tight mb-12">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {BESTSELLERS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
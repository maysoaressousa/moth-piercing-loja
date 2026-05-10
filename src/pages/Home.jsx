import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';

const BESTSELLERS = [
  { id: "vampire-heart-choker", name: "Vampire Heart Choker", price: 159.00, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop" },
  { id: "void-seeker-ring", name: "Void Seeker Ring", price: 143.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop" },
  { id: "lunar-cult-fedora", name: "Lunar Cult Fedora", price: 320.00, image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1000&auto=format&fit=crop" },
  { id: "coven-chain-boots", name: "Coven Chain Boots", price: 588.00, image: "https://images.unsplash.com/photo-1605812383198-051f77793d11?q=80&w=1000&auto=format&fit=crop" },
];

// Definição das novas categorias por zona do corpo
const CATEGORIES = [
  { name: 'Orelha', slug: 'orelha', image: 'https://images.unsplash.com/photo-1590246814883-5785014dcc5b?q=80&w=400' },
  { name: 'Nariz', slug: 'nariz', image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce33c7?q=80&w=400' },
  { name: 'Boca', slug: 'boca', image: 'https://images.unsplash.com/photo-1606206591513-adbf6676321c?q=80&w=400' },
  { name: 'Sobrancelha', slug: 'sobrancelha', image: 'https://images.unsplash.com/photo-1596944924591-1e23b6bc6180?q=80&w=400' },
  { name: 'Umbigo', slug: 'umbigo', image: 'https://images.unsplash.com/photo-1589703900985-7c08a47087f9?q=80&w=400' },
  { name: 'Mamilo', slug: 'mamilo', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400' },
  { name: 'Microdermal', slug: 'microdermal', image: 'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=400' },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/banner-moth.jpg"
            alt="Banner de piercings"
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

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

      {/* 2. NOVA SECÇÃO: CATEGORIAS (Fileira Única / Banner Style) */}
      <section id="categorias" className="py-16 bg-surface-lowest px-6 md:px-12 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto">
          <header className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-4 uppercase">
              Curated Selection
            </p>
            <h2 className="font-serif text-5xl md:text-6xl uppercase tracking-tighter italic">
              Categorias
            </h2>
          </header>
          
          {/* Fileira Única: Flexbox com overflow-x para mobile e grid de 7 para desktop */}
          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide md:grid md:grid-cols-7 md:gap-4 lg:gap-6">
            {CATEGORIES.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/colecao/${cat.slug}`} 
                className="group flex-shrink-0 w-64 md:w-auto text-center"
              >
                {/* Imagem Estilo Banner (Vertical/Muted Occult) */}
                <div className="aspect-[2/3] bg-background mb-6 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* Nome correspondente abaixo: Manrope */}
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-secondary group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VITRINE: BESTSELLERS */}
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="font-serif text-3xl uppercase tracking-tight">Bestsellers</h2>
            <Link to="/colecao/all" className="font-sans text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {BESTSELLERS.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
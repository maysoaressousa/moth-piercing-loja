import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';

// Dados dos Bestsellers (Simulando o que virá do seu banco de dados futuramente)
const BESTSELLERS = [
  { id: "vampire-heart-choker", name: "Vampire Heart Choker", price: 159.00, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop" },
  { id: "void-seeker-ring", name: "Void Seeker Ring", price: 143.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop" },
  { id: "lunar-cult-fedora", name: "Lunar Cult Fedora", price: 320.00, image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=1000&auto=format&fit=crop" },
  { id: "coven-chain-boots", name: "Coven Chain Boots", price: 588.00, image: "https://images.unsplash.com/photo-1605812383198-051f77793d11?q=80&w=1000&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION: Impacto Visual com Banner Limpo */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Banner de imagem atrás do hero */}
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/banner-moth.jpg"
            alt="Banner de piercings"
            className="h-full w-full object-cover object-center opacity-80"
          />
          {/* Overlay escuro para garantir a legibilidade do texto */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-5xl">
          {/* O retângulo de fundo foi removido para um visual mais "clean" e editorial */}
          <h1 className="font-serif text-6xl md:text-8xl uppercase tracking-tighter mb-4 leading-none">
            Ritualize seu <br /> Estilo
          </h1>
          <p className="font-serif italic text-primary text-xl md:text-2xl mb-10 tracking-wide">
            Piercings que expressam sua essência
          </p>
          <Button variant="primary">Compre Agora</Button>
        </div>
      </section>

      {/* 2. SEÇÃO: COLEÇÕES (Simétrica e Alinhada) */}
      <section id="colecoes" className="py-16 bg-surface-lowest px-6 md:px-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-20">
            <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-4 uppercase">
              Curated Selection
            </p>
            <h2 className="font-serif text-5xl md:text-6xl uppercase tracking-tighter italic">
              Coleções
            </h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card: Materiais */}
            <Link to="/colecao/materiais" className="group relative overflow-hidden aspect-video bg-background">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a18b5ce33c7?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                alt="Materiais"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-serif text-3xl uppercase tracking-widest mb-2 text-[#e5e2e1]">Materiais</h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary">Titânio • Ouro • Aço</p>
              </div>
            </Link>

            {/* Card: Tipos */}
            <Link to="/colecao/tipos" className="group relative overflow-hidden aspect-video bg-background">
              <img 
                src="https://images.unsplash.com/photo-1590246814883-5785014dcc5b?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                alt="Tipos"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-serif text-3xl uppercase tracking-widest mb-2 text-[#e5e2e1]">Tipos</h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary">Septo • Labret • Nostril</p>
              </div>
            </Link>
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
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function ProductDetail() {
  const { id } = useParams();

  // Mock de um piercing (em breve vindo do banco de dados/Prisma)
  const product = {
    name: "Vampire Heart Choker",
    price: 159.00,
    material: "Titânio G23 / Grau Implante",
    description: "Uma peça forjada para a eternidade. Com design anatômico e polimento espelhado, esta joia une a estética gótica à biocompatibilidade do titânio.",
    specs: ["Gauge: 1.2mm", "Diâmetro: 10mm", "Fecho: Clicker"],
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LADO ESQUERDO: Imagem (Muted Occult Treatment) */}
        <div className="aspect-[4/5] bg-surface-lowest overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* LADO DIREITO: Informações e Compra */}
        <div className="space-y-12">
          <div>
            <h1 className="font-serif text-5xl uppercase tracking-tighter mb-4 leading-none">
              {product.name}
            </h1>
            <p className="font-sans text-xl text-primary tracking-widest">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-md">
              {product.description}
            </p>
            
            {/* Especificações Técnicas (Precision Style) */}
            <ul className="space-y-2 border-t border-outline-variant/20 pt-6">
              <li className="font-sans text-[10px] tracking-widest uppercase text-secondary">Material: {product.material}</li>
              {product.specs.map(spec => (
                <li key={spec} className="font-sans text-[10px] tracking-widest uppercase text-secondary/60">{spec}</li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <Button variant="primary" className="w-full md:w-auto">
              Adicionar ao Ritual de Compra
            </Button>
          </div>
        </div>

      </div>

      {/* SEÇÃO INFERIOR: Sugestões Mentais */}
      <section className="mt-32 pt-16 border-t border-outline-variant/10">
        <h2 className="font-serif text-2xl italic mb-12">Você também pode desejar...</h2>
        {/* Aqui entrará um grid simples de produtos relacionados futuramente */}
      </section>
    </div>
  );
}
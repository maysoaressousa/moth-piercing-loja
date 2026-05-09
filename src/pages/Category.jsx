import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export default function Category() {
  const { slug } = useParams(); // Pega o nome da categoria da URL

  // Filtra os produtos que pertencem à categoria da URL
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === slug.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
      {/* Cabeçalho Editorial: Noto Serif */}
      <header className="mb-16 border-b border-outline-variant/10 pb-8">
        <p className="font-sans text-[10px] tracking-[0.3em] text-secondary mb-2 uppercase">
          Curated Collection
        </p>
        <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-tighter italic">
          {slug.replace('-', ' ')}
        </h1>
      </header>

      {/* Grid de Produtos: Espaçamento 12 (4rem) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="h-64 flex items-center justify-center border border-dashed border-outline-variant/20">
          <p className="font-serif italic text-secondary/50">
            Nenhuma joia encontrada nesta profundeza...
          </p>
        </div>
      )}
    </div>
  );
}
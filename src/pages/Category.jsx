import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

const MATERIALS = ['Todos', 'Titânio', 'Ouro', 'Aço'];

export default function Category() {
  const { slug } = useParams();
  const [selectedMaterial, setSelectedMaterial] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('default');

  // Lógica de filtragem e ordenação (Memorizada para performance)
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => p.category === slug.toLowerCase());

    if (selectedMaterial !== 'Todos') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [slug, selectedMaterial, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
      {/* Cabeçalho Editorial */}
      <header className="mb-12">
        <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-2 uppercase">Collection</p>
        <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-tighter italic">{slug}</h1>
      </header>

      {/* BARRA DE FILTROS: Tonal Layering */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 bg-surface-lowest p-6">
        {/* Filtro por Material */}
        <div className="flex gap-6 items-center">
          <span className="font-sans text-[10px] tracking-widest uppercase text-secondary">Material:</span>
          <div className="flex gap-4">
            {MATERIALS.map(mat => (
              <button
                key={mat}
                onClick={() => setSelectedMaterial(mat)}
                className={`font-sans text-[10px] tracking-widest uppercase transition-colors
                  ${selectedMaterial === mat ? 'text-primary' : 'text-secondary hover:text-[#e5e2e1]'}`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Ordenação por Preço */}
        <div className="flex gap-6 items-center">
          <span className="font-sans text-[10px] tracking-widest uppercase text-secondary">Ordenar:</span>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-transparent font-sans text-[10px] tracking-widest uppercase text-[#e5e2e1] focus:outline-none cursor-pointer"
          >
            <option value="default" className="bg-background">Lançamentos</option>
            <option value="price-asc" className="bg-background">Menor Preço</option>
            <option value="price-desc" className="bg-background">Maior Preço</option>
          </select>
        </div>
      </div>

      {/* Grid de Resultados */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="h-64 flex items-center justify-center border border-dashed border-outline-variant/10">
          <p className="font-serif italic text-secondary/40">Nenhuma joia encontrada com estes critérios.</p>
        </div>
      )}
    </div>
  );
}
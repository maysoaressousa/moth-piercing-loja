import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const ProductCard = ({ id, name, price, image }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const product = { id, name, price, image };

  return (
    <div className="group relative block">
      {/* Container da Imagem */}
      <div className="aspect-[3/4] bg-surface-lowest overflow-hidden mb-6 relative border border-outline-variant/5">
        <Link to={`/produto/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
          />
        </Link>

        {/* BOTÃO ADICIONAR (Agora com o texto atualizado) */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-primary-container/90 backdrop-blur-sm text-[#e5e2e1] py-4 font-sans text-[10px] tracking-[0.2em] uppercase 
                     translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 hover:bg-primary-container"
        >
          <Plus size={14} /> Adicionar ao Carrinho
        </button>
      </div>
      
      {/* Informações do Produto */}
      <div className="space-y-2">
        <Link to={`/produto/${id}`} className="block">
          <h3 className="font-serif text-lg uppercase tracking-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="font-sans text-xs text-secondary tracking-[0.2em] uppercase">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </div>
  );
};
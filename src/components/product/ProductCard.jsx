import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/produto/${id}`} className="group cursor-pointer block">
      {/* Container da Imagem com Tonal Layering */}
      <div className="aspect-[3/4] bg-surface-lowest overflow-hidden mb-6 relative border border-outline-variant/5">
        <img 
          src={image} 
          alt={name} 
          /* Removido o 'grayscale' para exibir as fotos coloridas */
          className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay sutil de vinho no hover para manter a identidade */}
        <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Identidade Visual: Noto Serif para o Nome e Manrope para o Preço */}
      <h3 className="font-serif text-lg uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="font-sans text-xs text-secondary tracking-[0.2em] uppercase">
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
    </Link>
  );
};
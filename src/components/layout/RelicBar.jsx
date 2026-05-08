import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export const RelicBar = () => {
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-50">
      <div className="bg-surface-high/60 backdrop-blur-xl border border-white/5 px-8 py-5 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Link to="/" className="font-serif text-xs tracking-[0.3em] uppercase hover:text-primary transition-colors">
          Moth Piercing
        </Link>
        
        <div className="flex gap-8 font-sans text-[9px] uppercase tracking-[0.2em] text-secondary">
          <Link to="/" className="hover:text-primary transition-colors">Coleções</Link>
          <Link to="/manifesto" className="hover:text-primary transition-colors">Manifesto</Link>
          <Link 
            to="/carrinho" 
            className="hover:text-primary transition-colors underline underline-offset-8 decoration-primary-container"
          >
            Carrinho ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};
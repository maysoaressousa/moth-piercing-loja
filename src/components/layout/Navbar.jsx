import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const Navbar = () => {
  // Acessa a quantidade de itens no ritual de compra
  const cartCount = useCartStore((state) => state.cart.length);

  const navLinks = [
    { name: 'MATERIAIS', path: '/colecao/materiais', active: true },
    { name: 'TIPOS', path: '/colecao/tipos', active: false },
    { name: 'BRINCOS', path: '/colecao/brincos', active: false },
    { name: 'LABRET', path: '/colecao/labret', active: false },
    { name: 'MATERIAL', path: '/colecao/material', active: false },
    { name: 'ACESSÓRIOS', path: '/colecao/acessorios', active: false },
  ];

  return (
    <nav className="w-full bg-background h-20 px-12 flex items-center justify-between z-50 sticky top-0">
      {/* Esquerda: Logo */}
      <div className="flex-1">
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#e5e2e1] uppercase">
          Moth Piercing
        </Link>
      </div>

      {/* Centro: Navegação */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              to={link.path}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 
                ${link.active ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              {link.name}
            </Link>
            {link.active && (
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-container" />
            )}
          </li>
        ))}
      </ul>

      {/* Direita: Ícones com Badge do Carrinho */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <Search size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <User size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <Heart size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        
        <Link to="/carrinho" className="relative group">
          <ShoppingBag size={20} className="text-primary group-hover:opacity-70 transition-opacity" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary-container text-[#e5e2e1] text-[9px] font-sans px-1.5 py-0.5 rounded-none min-w-[18px] text-center border border-background">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
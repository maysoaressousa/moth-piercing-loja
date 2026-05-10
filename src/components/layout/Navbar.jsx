import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const Navbar = () => {
  const cartCount = useCartStore((state) => state.cart.length);
  
  // Listas de Categorias para os Dropdowns
  const MATERIAIS_LIST = [
    { name: 'Aço Cirúrgico', slug: 'aco-cirurgico' },
    { name: 'Titânio', slug: 'titanio' },
  ];

  const TIPOS_LIST = [
    { name: 'Argola', slug: 'argola' },
    { name: 'Bananabell', slug: 'bananabell' },
    { name: 'Barbell', slug: 'barbell' },
    { name: 'Brinco', slug: 'brinco' },
    { name: 'Ferradura', slug: 'ferradura' },
    { name: 'Labret', slug: 'labret' },
    { name: 'Microbell Curvo', slug: 'microbell-curvo' },
    { name: 'Microdermal', slug: 'microdermal' },
    { name: 'Nostril', slug: 'nostril' },
  ];

  return (
    <nav className="w-full bg-background h-20 px-12 flex items-center justify-between z-[100] sticky top-0 border-b border-white/5">
      {/* Esquerda: Logo */}
      <div className="flex-1">
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#e5e2e1] uppercase">
          Moth Piercing
        </Link>
      </div>

      {/* Centro: Navegação Principal */}
      <ul className="hidden md:flex items-center gap-10">
        
        {/* DROPDOWN: MATERIAIS */}
        <li className="relative group py-4">
          <button className="flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-secondary group-hover:text-primary transition-colors cursor-default">
            Materiais <ChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-500 opacity-50" />
          </button>
          
          <div className="absolute top-full left-0 w-48 bg-surface-low opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-2xl">
            <ul className="py-4">
              {MATERIAIS_LIST.map((mat) => (
                <li key={mat.slug}>
                  <Link
                    to={`/colecao/${mat.slug}`}
                    className="block px-6 py-2.5 font-sans text-[10px] tracking-[0.15em] uppercase text-secondary hover:text-primary hover:bg-surface-lowest transition-all"
                  >
                    {mat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* DROPDOWN: TIPOS */}
        <li className="relative group py-4">
          <button className="flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-secondary group-hover:text-primary transition-colors cursor-default">
            Tipos <ChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-500 opacity-50" />
          </button>

          <div className="absolute top-full left-0 w-48 bg-surface-low opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-2xl">
            <ul className="py-4">
              {TIPOS_LIST.map((tipo) => (
                <li key={tipo.slug}>
                  <Link
                    to={`/colecao/${tipo.slug}`}
                    className="block px-6 py-2.5 font-sans text-[10px] tracking-[0.15em] uppercase text-secondary hover:text-primary hover:bg-surface-lowest transition-all"
                  >
                    {tipo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li><Link to="/colecao/brincos" className="font-sans text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors">Brincos</Link></li>
        <li><Link to="/colecao/labret" className="font-sans text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors">Labret</Link></li>
        <li><Link to="/colecao/acessorios" className="font-sans text-[11px] tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors">Acessórios</Link></li>
      </ul>

      {/* Direita: Ações */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <Search size={18} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <User size={18} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <Heart size={18} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        
        <Link to="/carrinho" className="relative group">
          <ShoppingBag size={18} className="text-primary group-hover:opacity-70 transition-opacity" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary-container text-[#e5e2e1] text-[9px] font-sans px-1.5 py-0.5 min-w-[18px] text-center border border-background">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
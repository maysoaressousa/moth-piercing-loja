import { Search, User, Heart, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  const navLinks = [
    { name: 'MATERIAIS', active: true },
    { name: 'TIPOS', active: false },
    { name: 'BRINCOS', active: false },
    { name: 'LABRET', active: false },
    { name: 'MATERIAL', active: false },
    { name: 'ACESSÓRIOS', active: false },
  ];

  return (
    <nav className="w-full bg-background h-20 px-12 flex items-center justify-between z-50">
      {/* Esquerda: Logo (Noto Serif) */}
      <div className="flex-1">
        <span className="font-serif text-2xl tracking-[0.15em] text-[#e5e2e1] uppercase cursor-pointer">
          Moth Piercing
        </span>
      </div>

      {/* Centro: Links de Navegação (Manrope) */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <a
              href={`#${link.name.toLowerCase()}`}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 
                ${link.active ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              {link.name}
            </a>
            {/* Underline para o estado ativo ou hover */}
            {link.active && (
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-container" />
            )}
          </li>
        ))}
      </ul>

      {/* Direita: Ícones de Ação (Primary Color) */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <Search size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <User size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <Heart size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
        <ShoppingBag size={20} className="text-primary cursor-pointer hover:opacity-70 transition-opacity" />
      </div>
    </nav>
  );
};
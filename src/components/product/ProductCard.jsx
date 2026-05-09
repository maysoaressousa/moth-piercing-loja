import { Link } from 'react-router-dom';

export const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/produto/${id}`} className="group cursor-pointer">
      <div className="aspect-[3/4] bg-surface-lowest overflow-hidden mb-6">
        <img 
          src={image} 
          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
          alt={name}
        />
      </div>
      <h3 className="font-serif text-lg uppercase tracking-tight">{name}</h3>
      <p className="font-sans text-xs text-secondary tracking-widest">{price}</p>
    </Link>
  );
};
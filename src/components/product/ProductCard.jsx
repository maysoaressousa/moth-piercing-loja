export const ProductCard = ({ name, price, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-surface-lowest overflow-hidden mb-6 relative">
        {/* Tratamento de imagem: alto contraste e dessaturada */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="font-serif text-lg uppercase tracking-tight mb-2">{name}</h3>
      <p className="font-sans text-xs text-secondary tracking-widest uppercase">
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
    </div>
  );
};
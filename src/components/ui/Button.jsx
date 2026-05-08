export const Button = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    // Fundo vinho, texto off-white e brilho interno no hover
    primary: "bg-primary-container text-[#e5e2e1] hover:shadow-[inset_0_0_15px_rgba(198,198,198,0.1)]",
    // Apenas borda "fantasma" inferior para elementos secundários
    secondary: "bg-transparent border-b border-outline-variant hover:border-secondary",
  };

  return (
    <button 
      {...props}
      className={`px-10 py-4 uppercase font-sans text-[10px] tracking-[0.2em] transition-all duration-500 rounded-none active:scale-95 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
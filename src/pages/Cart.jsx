import React from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, addToCart, clearCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8">
        <h1 className="font-serif text-4xl uppercase tracking-tighter italic opacity-50">O Ritual está vazio</h1>
        <Link to="/">
          <Button variant="secondary">Explorar Coleções</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
      <h1 className="font-serif text-5xl uppercase tracking-tighter mb-16">Seu Ritual de Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LISTA DE PRODUTOS (Lado Esquerdo) */}
        <div className="lg:col-span-8 space-y-12">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-8 items-center bg-surface-lowest p-6 group transition-colors hover:bg-surface-low">
              <div className="w-24 h-32 overflow-hidden bg-background">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="font-serif text-xl uppercase tracking-tight">{item.name}</h3>
                <p className="font-sans text-xs text-secondary tracking-widest uppercase">Joia em Titânio</p>
                <p className="font-sans text-primary text-sm">
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-secondary hover:text-primary-container transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <button 
            onClick={clearCart}
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors"
          >
            Limpar Ritual
          </button>
        </div>

        {/* RESUMO DO PEDIDO (Lado Direito) */}
        <div className="lg:col-span-4">
          <div className="bg-surface-high p-10 space-y-10 sticky top-32">
            <h2 className="font-serif text-2xl uppercase tracking-tight">Resumo</h2>
            
            <div className="space-y-4 font-sans text-xs tracking-widest uppercase text-secondary">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div className="flex justify-between">
                <span>Envio</span>
                <span className="italic">Calculado no Checkout</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 flex justify-between text-on-surface text-sm font-bold">
                <span>Total</span>
                <span className="text-primary">
                  {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>
            </div>

            <Button variant="primary" className="w-full flex items-center justify-center gap-4 group">
              Finalizar Pedido
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Button>

            <p className="font-sans text-[9px] text-center text-secondary/50 uppercase leading-relaxed">
              Pagamento seguro via criptografia de ponta.<br />Moth Piercing © 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
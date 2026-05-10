import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';

export default function Checkout() {
  const { cart } = useCartStore();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 25.00; // Valor simulado para Fortaleza e região
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Voltar ao Carrinho */}
        <Link to="/carrinho" className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-secondary hover:text-primary mb-12 transition-colors">
          <ChevronLeft size={14} /> Voltar ao Ritual
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* LADO ESQUERDO: Dados e Endereço */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Seção 1: Identificação */}
            <section className="space-y-8">
              <h2 className="font-serif text-3xl uppercase tracking-tighter italic">1. Identificação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="NOME COMPLETO" className="bg-surface-lowest border-none p-4 font-sans text-[11px] tracking-widest uppercase focus:ring-1 focus:ring-primary-container outline-none" />
                <input type="email" placeholder="E-MAIL" className="bg-surface-lowest border-none p-4 font-sans text-[11px] tracking-widest uppercase focus:ring-1 focus:ring-primary-container outline-none" />
              </div>
            </section>

            {/* Seção 2: Entrega */}
            <section className="space-y-8">
              <h2 className="font-serif text-3xl uppercase tracking-tighter italic">2. Destino</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="text" placeholder="CEP" className="bg-surface-lowest border-none p-4 font-sans text-[11px] tracking-widest uppercase focus:ring-1 focus:ring-primary-container outline-none" />
                <input type="text" placeholder="CIDADE" className="md:col-span-2 bg-surface-lowest border-none p-4 font-sans text-[11px] tracking-widest uppercase focus:ring-1 focus:ring-primary-container outline-none" />
                <input type="text" placeholder="ENDEREÇO" className="md:col-span-3 bg-surface-lowest border-none p-4 font-sans text-[11px] tracking-widest uppercase focus:ring-1 focus:ring-primary-container outline-none" />
              </div>
            </section>

            {/* Seção 3: Pagamento (Wildcard Options) */}
            <section className="space-y-8">
              <h2 className="font-serif text-3xl uppercase tracking-tighter italic">3. Método de Pagamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['PIX', 'CARTÃO DE CRÉDITO', 'BOLETO'].map((method) => (
                  <button key={method} className="bg-surface-lowest p-6 text-[10px] tracking-[0.2em] font-sans uppercase hover:bg-surface-low transition-colors border border-transparent hover:border-primary-container/30">
                    {method}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* LADO DIREITO: Resumo Fixo */}
          <aside className="lg:col-span-5 bg-surface-lowest p-10 space-y-10 sticky top-32">
            <h3 className="font-serif text-2xl uppercase tracking-tight">Resumo do Pedido</h3>
            
            <div className="max-h-60 overflow-y-auto space-y-6 pr-4 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 bg-background overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover grayscale" alt={item.name} />
                    </div>
                    <div>
                      <p className="font-serif text-[11px] uppercase tracking-tighter">{item.name}</p>
                      <p className="font-sans text-[9px] text-secondary">QTD: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-sans text-[10px] text-primary">
                    {(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <div className="flex justify-between font-sans text-[10px] tracking-widest uppercase text-secondary">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div className="flex justify-between font-sans text-[10px] tracking-widest uppercase text-secondary">
                <span>Envio Estelar</span>
                <span>{shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div className="flex justify-between font-sans text-sm font-bold uppercase pt-4 text-on-surface">
                <span>Total</span>
                <span className="text-primary">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
            </div>

            <Button variant="primary" className="w-full flex items-center justify-center gap-3">
              <Lock size={14} /> Finalizar Ritual
            </Button>
            
            <p className="text-[9px] text-center text-secondary uppercase tracking-[0.2em] leading-relaxed">
              Transação criptografada • Moth Piercing Studio
            </p>
          </aside>

        </div>
      </div>
    </div>
  );
}
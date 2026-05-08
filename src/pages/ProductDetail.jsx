import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useCartStore } from '../store/useCartStore';

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // Mock do produto (substitua futuramente por dados da sua API)
  const product = {
    id: id || "vampire-heart",
    name: "Vampire Heart Choker",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32">
      {/* ... (resto do seu layout de detalhes) */}
      <Button 
        variant="primary" 
        onClick={() => addToCart(product)}
      >
        Adicionar ao Ritual de Compra
      </Button>
    </div>
  );
}
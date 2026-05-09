import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      
      // Adiciona uma joia ao carrinho ou incrementa a quantidade
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

      // Remove a joia do ritual
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      })),

      // Limpa todo o estado do carrinho
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'moth-piercing-ritual', // Nome da chave que será criada no localStorage
    }
  )
);
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  
  // Adicionar item ao ritual de compra
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

  // Remover item
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  // Limpar ritual
  clearCart: () => set({ cart: [] }),
}));
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { RelicBar } from './components/layout/RelicBar';

// Importando as páginas que você acabou de criar
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="min-h-screen bg-background text-[#e5e2e1] font-sans">
      {/* A Navbar aparece em todas as páginas */}
      <Navbar />

      <main className="pb-32"> 
        {/* O Routes decide qual componente carregar baseado na URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/colecao/:slug" element={<Category />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </main>

      {/* A Relic Bar também é fixa e aparece em todas as páginas */}
      <RelicBar />
    </div>
  );
}

export default App;
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(cors()); // Permite que o seu React (porta 5173) converse com o Node (porta 3001)
app.use(express.json());

// Rota para buscar todos os produtos
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao evocar produtos do banco." });
  }
});

// Rota para buscar produtos por categoria
app.get('/products/category/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const products = await prisma.product.findMany({
      where: { category: slug }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao filtrar categoria." });
  }
});

// Rota para cadastrar um novo produto
app.post('/products', async (req, res) => {
  const { name, price, category, material, image, description } = req.body;
  
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        category,
        material,
        image,
        description
      }
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Erro ao ritualizar novo produto no banco." });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`---`);
  console.log(`Santuário de Dados Online`);
  console.log(`Porta: ${PORT}`);
  console.log(`---`);
});
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); // Sem argumentos, ele lê o .env automaticamente


const products = [
  {
    name: "Vampire Heart Clicker",
    price: 159.00,
    category: "orelha",
    material: "Titânio",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600",
    description: "Argola articulada em titânio de grau implante com design gótico."
  },
  {
    name: "Void Seeker Nostril",
    price: 89.00,
    category: "nariz",
    material: "Aço Cirúrgico",
    image: "https://images.unsplash.com/photo-1515562141207-7a18b5ce33c7?q=80&w=600",
    description: "Joia minimalista para perfuração de aba nasal."
  },
  {
    name: "Coven Labret Spike",
    price: 112.00,
    category: "boca",
    material: "Titânio",
    image: "https://images.unsplash.com/photo-1606206591513-adbf6676321c?q=80&w=600",
    description: "Labret com ponteira de spike para um visual alternativo agressivo."
  },
  {
    name: "Lunar Curved Barbell",
    price: 95.00,
    category: "sobrancelha",
    material: "Aço Cirúrgico",
    image: "https://images.unsplash.com/photo-1596944924591-1e23b6bc6180?q=80&w=600",
    description: "Haste curva clássica para perfurações de sobrancelha."
  },
  {
    name: "Abyss Navel Piercing",
    price: 185.00,
    category: "umbigo",
    material: "Titânio",
    image: "https://images.unsplash.com/photo-1589703900985-7c08a47087f9?q=80&w=600",
    description: "Joia de umbigo luxuosa com cristais austríacos."
  },
  {
    name: "Sigil Dermal Anchor",
    price: 130.00,
    category: "microdermal",
    material: "Titânio",
    image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=600",
    description: "Topo para microdermal em titânio polido."
  }
];

async function main() {
  console.log('Iniciando povoamento do banco de dados...');
  
  // Limpa o banco para evitar duplicatas
  await prisma.product.deleteMany();

  for (const p of products) {
    await prisma.product.create({
      data: p,
    });
  }
  console.log('Ritual concluído: Banco de dados alimentado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      // URLs de imagens reais relacionadas a tatuarias
      "https://images.unsplash.com/photo-1654338774369-79e915e94ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1562259954-bf6c7f31bf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661714220704-711551e73799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1665612077564-486eb0a43431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1509965478903-f26fb372b4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVzdCVDMyVCQWRpbyUyMHRhdHVhZ2VtfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661580079046-ecc1e4d519fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGVzdCVDMyVCQWRpbyUyMHRhdHVhZ2VtfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1654338773607-004058da0429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGVzdCVDMyVCQWRpbyUyMHRhdHVhZ2VtfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1608666599953-b951163495f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGVzdCVDMyVCQWRpbyUyMHRhdHVhZ2VtfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGVzdCVDMyVCQWRpbyUyMHRhdHVhZ2VtfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxlc3QlQzMlQkFkaW8lMjB0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",

      // ... adicione mais URLs de imagens de tatuarias (total de 10)
    ];

    const creativeNames = [
      "Ink Master",
      "Arte na Pele",
      "Tinta Viva",
      "Traço Perfeito",
      "Estúdio Colorido",
      "Agulha de Ouro",
      "Tattoo Express",
      "Pele & Arte",
      "Tatuagem Urbana",
      "Estilo Eterno",
    ];

    const addresses = [
      "Rua da Tatuagem, 123",
      "Avenida da Arte, 456",
      "Praça da Tinta, 789",
      "Travessa do Traço, 101",
      "Alameda dos Estilos, 202",
      "Estrada da Agulha, 303",
      "Avenida Colorida, 404",
      "Praça da Expressão, 505",
      "Rua Urbana, 606",
      "Avenida Eterna, 707",
    ];

    const services = [
      {
        name: "Tatuagem Pequena",
        description: "Designs simples e delicados para iniciantes.",
        price: 150.0,
        imageUrl: "https://images.unsplash.com/photo-1569858253870-5402388b8197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Tatuagem Média",
        description: "Designs elaborados de tamanho médio.",
        price: 300.0,
        imageUrl: "https://images.unsplash.com/photo-1522687533888-1078974f88ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Tatuagem Grande",
        description: "Obras de arte complexas e detalhadas.",
        price: 500.0,
        imageUrl: "https://images.unsplash.com/photo-1598816639574-47ef99da24fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Cover-up",
        description: "Transforme tatuagens antigas em novas obras de arte.",
        price: 400.0,
        imageUrl: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Desenho Personalizado",
        description: "Criação de designs únicos para sua tatuagem.",
        price: 100.0,
        imageUrl: "https://images.unsplash.com/photo-1600271772357-fdbc8b298eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Retoque",
        description: "Revitalização de tatuagens existentes.",
        price: 80.0,
        imageUrl: "https://images.unsplash.com/photo-1512053506427-2a27ac4656fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Tatuagem Colorida",
        description: "Designs vibrantes e expressivos com uma ampla paleta de cores.",
        price: 120.0,
        imageUrl: "https://images.unsplash.com/photo-1561432868-931a1373efa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Tatuagem Realista",
        description: "Arte corporal hiper-realista que captura detalhes com precisão fotográfica.",
        price: 500.0,
        imageUrl: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Tatuagem Minimalista",
        description: "Designs simples e elegantes que fazem uma declaração sutil mas impactante.",
        price: 400.0,
        imageUrl: "https://images.unsplash.com/photo-1695226304152-931956f4a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Tatuagem Tradicional",
        description: "Estilos clássicos de tatuagem com linhas audaciosas e cores sólidas.",
        price: 400.0,
        imageUrl: "https://images.unsplash.com/photo-1723288305005-76d9eb2d3280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },

    ];

    // Criar 10 tatuarias com nomes e endereços fictícios
    const tattooShops = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const tattooShop = await prisma.tattoshop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "Estúdio de tatuagem especializado em designs únicos e personalizados. Nossa equipe de artistas talentosos está pronta para transformar suas ideias em arte permanente. Utilizamos equipamentos de última geração e seguimos rigorosos padrões de higiene para garantir sua segurança e satisfação.",
        },
      });

      for (const service of services) {
        await prisma.tattoservice.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            tattoshop: {
              connect: {
                id: tattooShop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      tattooShops.push(tattooShop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as tatuarias:", error);
  }
}

seedDatabase();
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

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
    ]

    const creativeNames = [
      "Ink Master",
      "Art on Skin",
      "Living Ink",
      "Perfect Stroke",
      "Color Studio",
      "Golden Needle",
      "Tattoo Express",
      "Skin & Art",
      "Urban Tattoo",
      "Eternal Style",
    ]

    const addresses = [
      "Tattoo Street, 123",
      "Avenue of Art, 456",
      "Ink Square, 789",
      "Stroke Alley, 101",
      "Styles Avenue, 202",
      "Needle Road, 303",
      "Colorful Avenue, 404",
      "Expression Square, 505",
      "Urban Street, 606",
      "Eternal Avenue, 707",
    ]

    const services = [
      {
        name: "Small Tattoo",
        description: "Simple and delicate designs for beginners.",
        price: 150.0,
        imageUrl:
          "https://images.unsplash.com/photo-1569858253870-5402388b8197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Medium Tattoo",
        description: "Elaborate medium-sized designs.",
        price: 300.0,
        imageUrl:
          "https://images.unsplash.com/photo-1522687533888-1078974f88ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Large Tattoo",
        description: "Complex and detailed works of art.",
        price: 500.0,
        imageUrl:
          "https://images.unsplash.com/photo-1598816639574-47ef99da24fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRhdHVhZ2VtfGVufDB8fDB8fHww",
      },
      {
        name: "Cover-up",
        description: "Transform old tattoos into new works of art.",
        price: 400.0,
        imageUrl:
          "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Custom Design",
        description: "Creation of unique designs for your tattoo.",
        price: 100.0,
        imageUrl:
          "https://images.unsplash.com/photo-1600271772357-fdbc8b298eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Touch-up",
        description: "Revitalization of existing tattoos.",
        price: 80.0,
        imageUrl:
          "https://images.unsplash.com/photo-1512053506427-2a27ac4656fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Colorful Tattoo",
        description:
          "Vibrant and expressive designs with a wide color palette.",
        price: 120.0,
        imageUrl:
          "https://images.unsplash.com/photo-1561432868-931a1373efa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Realistic Tattoo",
        description:
          "Hyper-realistic body art that captures details with photographic precision.",
        price: 500.0,
        imageUrl:
          "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Minimalist Tattoo",
        description:
          "Simple and elegant designs that make a subtle yet impactful statement.",
        price: 400.0,
        imageUrl:
          "https://images.unsplash.com/photo-1695226304152-931956f4a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Traditional Tattoo",
        description: "Classic tattoo styles with bold lines and solid colors.",
        price: 400.0,
        imageUrl:
          "https://images.unsplash.com/photo-1723288305005-76d9eb2d3280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx0YXR1YWdlbXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ]

    // Criar 10 tatuarias com nomes e endereços fictícios
    const tattooShops = []
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i]
      const address = addresses[i]
      const imageUrl = images[i]

      const tattooShop = await prisma.tattoshop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "A tattoo studio specializing in unique and custom designs. Our team of talented artists is ready to turn your ideas into permanent art. We use state-of-the-art equipment and follow strict hygiene standards to ensure your safety and satisfaction.",
        },
      })

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
        })
      }

      tattooShops.push(tattooShop)
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect()
  } catch (error) {
    console.error("Erro creating the tattoos:", error)
  }
}

seedDatabase()

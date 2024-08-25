import { SearchIcon } from "lucide-react"
import Header from "./_components/hearder"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import TattoshopItem from "./_components/tattoshop-item"
import Footer from "./_components/footet"
import {
  Gem,
  PenTool,
  Feather,
  Brush,
  Edit3,
  RefreshCw,
  Palette,
  Eye,
  Circle,
  Anchor,
} from "lucide-react"

const Home = async () => {
  const tattoshops = await db.tattoshop.findMany({})
  const popularTattoshops = await db.tattoshop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  console.log(tattoshops)

  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Hello, Magaiver!</h2>
        <p>Friday, 22 August</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua Busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-4 flex gap-3 overflow-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Gem />
            <p className="">Small Tatto</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <PenTool />
            <p className="">Medio Tatto</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Feather />
            <p className="">Big Tatto</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Brush />
            <p className="">Cover up Tatto</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Edit3 />
            <p className="">Custom tattoo</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <RefreshCw />
            <p className="">Tattoo Retouching</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Palette />
            <p className="">Colorful Tattoo</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Eye />
            <p className="">Realistic Tattoo</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Circle /> {/* Desenho Personalizado */}
            <p className="">Minimalist Tattoo</p>
          </Button>

          <Button className="gap-2" variant="secondary">
            <Anchor /> {/* Desenho Personalizado */}
            <p className="">Traditional Tattoo</p>
          </Button>
        </div>

        <div className="relative mt-4 aspect-[21/9] w-full sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px]">
          <Image
            src="/banner.png"
            alt="banner"
            fill
            className="rounded-[20px] object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Appointments
        </h2>

        <Card className="">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmed</Badge>
              <h3 className="font-semibold">Simple tattoo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1654338774369-79e915e94ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D" />
                </Avatar>

                <p className="text-sm">Ink Master</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">August</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:24</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Recommended
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {tattoshops.map((tattoshop) => (
            <TattoshopItem key={tattoshop.id} tattoshop={tattoshop} />
          ))}
        </div>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Popular
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularTattoshops.map((tattoshop) => (
            <TattoshopItem key={tattoshop.id} tattoshop={tattoshop} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home

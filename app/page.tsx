import { SearchIcon } from "lucide-react"
import Header from "./_components/hearder"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import TattoshopItem from "./_components/tattoshop-item"
import Footer from "./_components/footet"
import QuickSearch from "./_components/quickSearch"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const tattoshops = await db.tattoshop.findMany({})
  const popularTattoshops = await db.tattoshop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

        <QuickSearch />

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

        <BookingItem />

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

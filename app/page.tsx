import { SearchIcon } from "lucide-react"
import Header from "./_components/hearder"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Óla, Magaiver!</h2>
        <p>Quinta Feira, 22 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua Busca..." />
          <Button>
            <SearchIcon />
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
      </div>
    </>
  )
}

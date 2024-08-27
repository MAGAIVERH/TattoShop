import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface TattoshopsPageProps {
  params: {
    id: string
  }
}

const TattoShopsPage = async ({ params }: TattoshopsPageProps) => {
  const tattoshop = await db.tattoshop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!tattoshop) {
    return notFound()
  }

  return (
    <>
      <div>
        {/* IMAGE */}
        <div className="relative h-[250px] w-full">
          <Image
            src={tattoshop.imageUrl}
            alt={tattoshop.name}
            fill
            className="rounded-b-2xl object-cover"
          />

          <Button
            size="icon"
            variant="secondary"
            className="absolute left-4 top-4"
            asChild
          >
            <Link href="/">
              <ChevronLeftIcon />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="absolute right-4 top-4"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>

        {/*TITLE */}
        <div className="border-b border-solid p-5">
          <h1 className="mb-3 text-xl font-bold">{tattoshop?.name}</h1>
          <div className="mb-2 flex items-center gap-2">
            <MapPinIcon className="text-primary" size={18} />
            <p className="text-sm">{tattoshop?.address}</p>
          </div>

          <div className="flex items-center gap-2">
            <StarIcon className="fill-primary text-primary" size={18} />
            <p className="text-sm">5,0 (499 Ratings)</p>
          </div>
        </div>

        {/* DESCIPTION */}
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="text-xs font-bold uppercase text-gray-400">
            About Us
          </h2>
          <p className="text-justify text-sm">{tattoshop?.description}</p>
        </div>

        {/*SERVICES */}
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="text-xs font-bold uppercase text-gray-400">
            Services
          </h2>
          <div className="space-y-3">
            {tattoshop.services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="space-y-3 p-5">
          {tattoshop.phones.map((phone) => (
            <PhoneItem key={phone} phone={phone} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TattoShopsPage

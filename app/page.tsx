import Header from "./_components/hearder"
import Image from "next/image"
import { db } from "./_lib/prisma"
import TattoshopItem from "./_components/tattoshop-item"
import QuickSearch from "./_components/quickSearch"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import AnnouncementBar from "./_components/announcementBar"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const services = await db.tattoservice.findMany({
    orderBy: {
      name: "asc",
    },
    distinct: ["name"],
  })
  const tattoshops = await db.tattoshop.findMany({})
  const popularTattoshops = await db.tattoshop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const Confirmedbookings = session?.user
    ? await db.tattobooking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              tattoshop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : []

  return (
    <>
      <AnnouncementBar />
      {/* Header*/}
      <Header />

      <div className="p-5">
        {/* Text */}
        <h2 className="text-xl font-bold">
          Hello, {session?.user ? session.user.name : "Welcome!"}
        </h2>
        {format(new Date(), "EEEE, MMMM d", { locale: enUS })}

        {/* Search */}
        <div className="mt-6">
          <Search />
        </div>

        {/* Quickly Search*/}
        <QuickSearch services={services} />

        {/* Bunner*/}
        <div className="relative mt-4 aspect-[21/9] w-full sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px]">
          <Image
            src="/banner.png"
            alt="bunner"
            fill
            className="rounded-[20px] object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {Confirmedbookings.length > 0 && (
          <>
            {/* Appointments */}
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Appointments
            </h2>

            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {Confirmedbookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

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
    </>
  )
}

export default Home

import { getServerSession } from "next-auth"
import Header from "../_components/hearder"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import BookingItem from "../_components/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    //TODO: show pop-up to logi in
    return notFound()
  }
  const confirmedBookings = await db.tattobooking.findMany({
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

  const completedBookings = await db.tattobooking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
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

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Appointments</h1>
        {confirmedBookings.length === 0 && completedBookings.length === 0 && (
          <p className="text-gray-400">You don&#39;t have any appointments</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
              Comfirmed
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}

        {completedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
              Completed
            </h2>
            {completedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Bookings

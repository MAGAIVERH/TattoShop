import { Prisma } from "@prisma/client"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { format, isFuture } from "date-fns"
import { enUS } from "date-fns/locale"

// Receber o agendamento como props
interface BookingItemProps {
  booking: Prisma.TattobookingGetPayload<{
    include: {
      service: {
        include: {
          tattoshop: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isConfirmed = isFuture(booking.date)

  return (
    <>
      <Card className="min-w-[90%]">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge
              className="w-fit"
              variant={isConfirmed ? "default" : "secondary"}
            >
              {isConfirmed ? "Confirmed" : "Completed"}
            </Badge>
            <h3 className="font-semibold">{booking.service.name}</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={booking.service.tattoshop.imageUrl} />
              </Avatar>

              <p className="text-sm">{booking.service.tattoshop.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="truncate text-sm capitalize">
              {format(booking.date, "MMMM", { locale: enUS })}
            </p>
            <p className="text-2xl">
              {format(booking.date, "dd", { locale: enUS })}
            </p>
            <p className="text-sm">
              {format(booking.date, "HH:mm", { locale: enUS })}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem

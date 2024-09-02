import { Prisma } from "@prisma/client"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { format, isFuture } from "date-fns"
import { enUS } from "date-fns/locale"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import Image from "next/image"
import PhoneItem from "./phone-item"

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
  const {
    service: { tattoshop },
  } = booking
  const isConfirmed = isFuture(booking.date)

  return (
    <Sheet>
      <SheetTrigger className="w-full">
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
      </SheetTrigger>

      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-left">Reservation Information</SheetTitle>
        </SheetHeader>

        <div className="relative mt-6 flex h-[180px] w-full items-end">
          <Image
            src="/map.png"
            fill
            alt={`Tatto Shop map ${booking.service.tattoshop.name}`}
            className="rounded-xl object-cover"
          />

          <Card className="z-50 mx-5 mb-3 w-full rounded-xl">
            <CardContent className="flex items-center gap-3 px-5 py-3">
              <Avatar>
                <AvatarImage src={tattoshop.imageUrl} />
              </Avatar>

              <div>
                <h3 className="truncate font-bold">{tattoshop.name}</h3>
                <p className="truncate text-xs">{tattoshop.address}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Badge
            className="w-fit"
            variant={isConfirmed ? "default" : "secondary"}
          >
            {isConfirmed ? "Confirmed" : "Completed"}
          </Badge>

          <Card className="mb-6 mt-3">
            <CardContent className="space-y-3 p-3">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{booking.service.name}</h2>
                <p className="text-sm font-bold text-primary">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(booking.service.price))}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Date</h2>
                <p className="text-sm font-bold text-primary">
                  {format(booking.date, "MMMM d", {
                    locale: enUS,
                  })}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Time</h2>
                <p className="text-sm font-bold text-primary">
                  {format(booking.date, "HH:mm", { locale: enUS })}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Tatto Shop</h2>
                <p className="text-sm font-bold text-primary">
                  {tattoshop.name}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {tattoshop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default BookingItem

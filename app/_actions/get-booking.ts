"use server"

import { endOfDay, startOfDay } from "date-fns"
import { db } from "../_lib/prisma"

interface GetBookingProps {
  serviceId: string
  date: Date
}

export const GetBooking = ({ date }: GetBookingProps) => {
  return db.tattobooking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })
}

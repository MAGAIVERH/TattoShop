"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

interface CreateBookingParams {
  userId: string
  serviceId: string
  date: Date
}
export const CreateBooking = async (params: CreateBookingParams) => {
  await db.tattobooking.create({
    data: params,
  })
  revalidatePath("/tattoshops/[id]")
}

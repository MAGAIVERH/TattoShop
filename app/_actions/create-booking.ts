"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface CreateBookingParams {
  serviceId: string
  date: Date
}
export const CreateBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Unauthenticated")
  }

  await db.tattobooking.create({
    data: { ...params, userId: (user.user as any).id },
  })
  revalidatePath("/tattoshops/[id]")
}

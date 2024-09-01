"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { serviceOptions } from "../_contants/quickSearch"
import { Dialog, DialogContent } from "./ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"
import SignInDialog from "./sign-in-dialog"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLogoutGoogleClick = async () => {
    await signOut()
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Manu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-sm">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Hello, Log in!</h2>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Home
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Appointments
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {serviceOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/tattoshops?service=${option.title}`}>
                <option.icon className="h-4 w-4" />
                <p>{option.title}</p>
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-3">
        <Button
          className="gap-2"
          variant="secondary"
          onClick={handleLogoutGoogleClick}
        >
          <LogOut size={18} />
          LogOut
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOut, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

import { serviceOptions } from "../_contants/quickSearch"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src="/logoTattoAtualizada.png"
          alt="Logo Tatto"
          height={18}
          width={120}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Manu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="/magaiver-fundo-roxo.jpg" alt="foto perfil" />
              </Avatar>

              <div>
                <p className="font-bold">Magaiver Magalhaes</p>
                <p className="text-sm">magaivermagalhaes@hotmail.com</p>
              </div>
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
                <Button
                  className="justify-start gap-2"
                  variant="ghost"
                  key={option.title}
                >
                  <option.icon className="h-4 w-4" />
                  <p>{option.title}</p>
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-2 py-5">
              <Button className="gap-2" variant="secondary">
                <LogOut size={18} />
                LogOut
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header

import { CalendarIcon, HomeIcon, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { serviceOptions } from "../_contants/quickSearch"

const SidebarSheet = () => {
  return (
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
  )
}

export default SidebarSheet

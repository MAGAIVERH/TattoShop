import { Tattoshop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface TattoshopItemProps {
  tattoshop: Tattoshop
}

const TattoshopItem = ({ tattoshop }: TattoshopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            alt={tattoshop.name}
            className="rounded-2xl object-cover"
            src={tattoshop.imageUrl}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{tattoshop.name}</h3>
          <p className="truncate text-sm text-gray-400">{tattoshop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Book
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TattoshopItem

import {
  Gem,
  PenTool,
  Feather,
  Brush,
  Edit3,
  RefreshCw,
  Palette,
  Eye,
  Circle,
  Anchor,
  LucideIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import { Tattoservice } from "@prisma/client"

const iconMap: { [key: string]: LucideIcon } = {
  pequena: Gem,
  média: PenTool,
  grande: Feather,
  "cover-up": Brush,
  personalizada: Edit3,
  retoque: RefreshCw,
  colorida: Palette,
  realista: Eye,
  minimalista: Circle,
  tradicional: Anchor,
}

interface QuickSearchProps {
  services: Tattoservice[]
}

const QuickSearch = ({ services }: QuickSearchProps) => {
  // console.log(
  //   "Serviços recebidos:",
  //   services.map((s) => s.name),
  // )

  const getIcon = (serviceName: string): LucideIcon => {
    const lowercaseName = serviceName.toLowerCase()
    for (const [key, icon] of Object.entries(iconMap)) {
      if (lowercaseName.includes(key)) {
        return icon
      }
    }
    return Gem // Ícone padrão se nenhuma correspondência for encontrada
  }

  return (
    <div className="mt-4 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {services.map((service) => {
        const Icon = getIcon(service.name)
        return (
          <Button
            key={service.id}
            variant="secondary"
            className="flex items-center"
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="text-sm">{service.name}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default QuickSearch

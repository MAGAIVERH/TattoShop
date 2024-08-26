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

interface ServiceOption {
  icon: LucideIcon
  title: string
}

export const serviceOptions: ServiceOption[] = [
  {
    icon: Gem,
    title: "Pequena",
  },
  {
    icon: PenTool,
    title: "Média",
  },
  {
    icon: Feather,
    title: "Grande",
  },
  {
    icon: Brush,
    title: "Cover-up",
  },
  {
    icon: Edit3,
    title: "Personalizada",
  },
  {
    icon: RefreshCw,
    title: "Retoque",
  },
  {
    icon: Palette,
    title: "Colorida",
  },
  {
    icon: Eye,
    title: "Realista",
  },
  {
    icon: Circle,
    title: "Minimalista",
  },
  {
    icon: Anchor,
    title: "Tradicional",
  },
]

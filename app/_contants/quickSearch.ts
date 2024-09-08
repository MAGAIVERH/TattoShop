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
    title: "Small",
  },
  {
    icon: PenTool,
    title: "Medium",
  },
  {
    icon: Feather,
    title: "Large",
  },
  {
    icon: Brush,
    title: "Cover-up",
  },
  {
    icon: Edit3,
    title: "Design",
  },
  {
    icon: RefreshCw,
    title: "Touch-up",
  },
  {
    icon: Palette,
    title: "Colorful",
  },
  {
    icon: Eye,
    title: "Realistic",
  },
  {
    icon: Circle,
    title: "Minimalist",
  },
  {
    icon: Anchor,
    title: "Traditional",
  },
]

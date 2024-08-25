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
} from "lucide-react"
import { Button } from "./ui/button"

const QuickSearch = () => {
  return (
    <div className="mt-4 flex gap-3 overflow-scroll [&::-webkit-scrollbar]:hidden">
      <Button className="gap-2" variant="secondary">
        <Gem />
        <p className="">Small Tatto</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <PenTool />
        <p className="">Medio Tatto</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Feather />
        <p className="">Big Tatto</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Brush />
        <p className="">Cover up Tatto</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Edit3 />
        <p className="">Custom tattoo</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <RefreshCw />
        <p className="">Tattoo Retouching</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Palette />
        <p className="">Colorful Tattoo</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Eye />
        <p className="">Realistic Tattoo</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Circle />
        <p className="">Minimalist Tattoo</p>
      </Button>

      <Button className="gap-2" variant="secondary">
        <Anchor />
        <p className="">Traditional Tattoo</p>
      </Button>
    </div>
  )
}

export default QuickSearch

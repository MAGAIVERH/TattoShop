"use client"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = () => {
    navigator.clipboard.writeText(phone)
    toast.success("Phone copied successfully")
  }

  return (
    <div className="flex justify-between" key={phone}>
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p>{phone}</p>
      </div>

      {/* RIGHT */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick()}
      >
        Copy
      </Button>
    </div>
  )
}

export default PhoneItem

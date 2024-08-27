import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// Receber o agendamento como props
const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
        Appointments
      </h2>

      <Card className="">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmed</Badge>
            <h3 className="font-semibold">Simple tattoo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1654338774369-79e915e94ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXN0JUMzJUJBZGlvJTIwdGF0dWFnZW18ZW58MHx8MHx8fDA%3D" />
              </Avatar>

              <p className="text-sm">Ink Master</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">August</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:24</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem

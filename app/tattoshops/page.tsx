import Header from "../_components/hearder"
import Search from "../_components/search"
import TattoshopItem from "../_components/tattoshop-item"
import { db } from "../_lib/prisma"

interface TattoshopsPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

const TattoshopsPage = async ({ searchParams }: TattoshopsPageProps) => {
  const tattoshops = await db.tattoshop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},

        searchParams?.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Results for &quot;{searchParams?.title || searchParams?.service}&quot;
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {tattoshops.map((tattoshop) => (
            <TattoshopItem key={tattoshop.id} tattoshop={tattoshop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TattoshopsPage

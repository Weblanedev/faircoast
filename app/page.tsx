import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?: string
  }
}

export default async function Page({ searchParams }: Props) {
  // await seedSanityData()

  const { date = "desc", price, color, category, size, search } = searchParams
  const priceOrder = searchParams.price
    ? `| order(price ${searchParams.price})`
    : ""
  const dateOrder = searchParams.date
    ? `| order(_createdAt ${searchParams.date})`
    : ""
  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq`${filter} ${order} {
        _id,
        _createdAt,
        name,
        sku,
        images,
        currency,
        price,
        description,
        "slug": slug.current

    }`
  )
  return (
    <div>
      <div
        className="flex flex-col justify-center relative px-4 pt-20 text-center bg-[url('https://images.pexels.com/photos/8351360/pexels-photo-8351360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="text-4xl font-extrabold tracking-normal text-white z-1 relative">
          Discover Faircoast: Your Gateway to Port Excellence!
        </h1>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-white z-1 relative">
          {siteConfig.description}. Experience seamless port services, top-notch
          gear rentals, and comprehensive solutions for all your maritime needs.
        </p>
        <div>
          <a href="/contact">
            <Button className="w-fit mt-10 z-1 relative">
              Explore Our Services
            </Button>
          </a>
        </div>
      </div>

      <div className="py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
              Why Choose Faircoast?
            </h2>
            <p className="text-gray-700">
              At Faircoast, we are committed to delivering exceptional port
              services and gear rentals. Our mission is to enhance your maritime
              experience with reliable, efficient, and customized solutions.
              Whether you are docking, boating, or renting gear, we have you
              covered with quality and professionalism. Join us as we set sail
              towards excellence in port operations and gear management.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              src="https://images.pexels.com/photos/251799/pexels-photo-251799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
              alt="Faircoast Port Services"
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="py-12 text-center text-primary dark:text-secondary">
        <h2 className="text-3xl font-bold mb-4">Ready to Set Sail with Us?</h2>
        <p className="mb-6">
          Join countless others in experiencing the best in port services and
          gear solutions with Faircoast.
        </p>
        <a href="/contact">
          <Button>Contact Us Today</Button>
        </a>
      </div>
    </div>
  )
}

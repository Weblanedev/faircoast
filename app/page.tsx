import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { inventory, SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { seedSanityData } from "@/lib/seed"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
        className="relative px-4 pt-20 text-center bg-[url('https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="text-4xl font-extrabold tracking-normal text-white z-1 relative">
          Join the Solar Revolution! Start Your Journey Here!
        </h1>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-white z-1 relative">
          {siteConfig.description}. With our easy installation process, expert support, and commitment to sustainability, transitioning to solar energy has never been easier.
        </p>
        <div>
          <a href="/products">
            <Button className="w-fit mt-10 z-1 relative">
              Get Started
            </Button>
          </a>
        </div>
      </div>

      <div className="py-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">Why Us?</h2>
          <p className="text-gray-700">
            At Sortbox, we are dedicated to revolutionizing energy solutions through innovative battery power stations. Our mission is to empower individuals and businesses with reliable, sustainable energy options that promote energy independence and environmental responsibility. With a focus on quality, efficiency, and customer satisfaction, we strive to provide the tools necessary for a cleaner, greener future. Join us on our journey to harness the power of renewable energy and make a positive impact on our planet.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image 
            src="https://images.pexels.com/photos/164572/pexels-photo-164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image path
            alt="Sortbox Battery Power Station"
            width={500} // Adjust width as needed
            height={400} // Adjust height as needed
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>

      <div className="py-12 text-center text-primary dark:text-secondary">
        <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
        <p className="mb-6">
          Join countless others in embracing sustainable energy solutions with Sortbox.
        </p>
        <a href="/contact">
          <Button>
            Contact Us Today
          </Button>

        </a>
      </div>
    </div>
  )
}

import { client } from "@/sanity/lib/client"
import { product } from "@/sanity/schemas/product-schema"
import { groq } from "next-sanity"

import { inventory, SanityProduct } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

interface Props {
  params: {
    slug?: string
  }
}

export default async function Page({ params }: Props) {
  // const product = await client.fetch<SanityProduct>(groq`
  // *[_type == "product" && slug.current == "${params.slug}"][0]{
  //   _id,
  //   _createdAt,
  //   "id" : _id,
  //   name,
  //   sku,
  //   images,
  //   price,
  //   currency,
  //   description,
  //   sizes,
  //   categories,
  //   colors,
  //   "slug": slug.current
    
  
  //   }`)
  const product = inventory.filter(item => item.sku === params.slug);
  console.log("d", product)
  console.log("de", product[0].images)

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          <ProductGallery product={product[0]} />
          {/* Product info */}
          <ProductInfo product={product[0]} />
        </div>
      </div>
    </main>
  )
}

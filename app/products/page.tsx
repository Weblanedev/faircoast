import { ProductGrid } from '@/components/product-grid'
import { inventory } from '@/config/inventory'
import React from 'react'

const Products = () => {
    return (
        <div className="px-4 pt-20 text-center">
            <main className="mx-auto max-w-6xl px-6">
                <section aria-labelledby="products-heading" className="pb-24 pt-6">

                    {/* Product grid */}
                    <ProductGrid products={inventory} />
                </section>
            </main>
        </div>
    )
}

export default Products
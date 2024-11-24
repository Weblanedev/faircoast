"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { siteConfig } from "@/config/site"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
// import { ThemeToggle } from "@/components/theme-toggle"

;(" ")

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get("search") ?? ""
  if (pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/?search=${searchQuery}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        {/* <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div> */}
      </div>
    </header>
  )
}

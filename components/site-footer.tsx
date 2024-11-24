import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8">
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
        <div className="-mb-6 columns-2 flex flex-col justify-center items-center text-sm">
          <p>Reach out to us at +2349083536888,</p>
          <p>4, Yemi Kayode Street, Akobo Estate, Ibadan, Oyo State, Nigeria</p>
        </div>
        <Link
          href="http://faircoast.org/"
          className="mt-10 block text-center text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </Link>
      </div>
    </footer>
  )
}

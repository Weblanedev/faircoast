import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <div className="flex gap-4 md:gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-[40px] h-[40px] relative">
          <Image
            src={"https://i.ibb.co/WnmdzMx/faircoast.png"}
            alt={"logo"}
            fill
            className="h-fit w-full object-contain mix-blend-lighten"
          />
        </div>
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <div className="flex gap-4 md:gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <div
          className="relative h-[40px] w-[40px] border-2 border-gray-800"
          //
        >
          <Image
            src={"https://i.ibb.co/WnmdzMx/faircoast.png"}
            // src={"https://i.ibb.co/3yLg2tY/faircoast2.png"}
            alt={"logo"}
            fill
            // className="h-fit w-full object-contain mix-blend-lighten"
          />
        </div>
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Image from "next/image"

export function MainNav() {
  return (
    <div className="flex gap-4 md:gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <div className='w-[40px] h-[40px] relative'>
          <Image
            src={'https://th.bing.com/th/id/R.67ee88df7f8fb15d9c54a261bb38a234?rik=gAWDR%2fHFjEpJMA&pid=ImgRaw&r=0'}
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

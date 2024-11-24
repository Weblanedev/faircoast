import { Image } from "sanity"

export interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "powerstation1",
    name: "Sortbox Home Series 2000",
    image: "https://th.bing.com/th/id/OIF.xOjac8Z8Gk3BwJy1JkdJqw?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIF.xOjac8Z8Gk3BwJy1JkdJqw?rs=1&pid=ImgDetMain",
    ],
    categories: ["Battery Power Stations", "Home Use"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 20000000,
    currency: "NGN",
    description: "The Sortbox Home Series 2000 is a compact yet powerful battery power station ideal for home use. It provides an uninterrupted power supply during outages and helps reduce electricity bills by storing energy during off-peak hours. Perfect for eco-conscious homeowners, it offers a reliable backup with sleek design.",
    sku: "sortbox-home-series-2000"
  },
  {
    id: "powerstation2",
    name: "Sortbox Pro Series 5000",
    image: "https://th.bing.com/th/id/OIP.qtVTE8quRWvoiOl6crxVPAHaHa?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.qtVTE8quRWvoiOl6crxVPAHaHa?rs=1&pid=ImgDetMain",
    ],
    categories: ["Battery Power Stations", "Business Use"],
    sizes: ["One Size"],
    colors: ["Gray"],
    price: 50000000,
    currency: "NGN",
    description: "Built for small to medium businesses, the Sortbox Pro Series 5000 provides robust energy storage and high power output. Its modular design allows for easy capacity upgrades, reducing energy costs and supporting essential business operations during blackouts.",
    sku: "sortbox-pro-series-5000"
  },
  {
    id: "powerstation3",
    name: "Sortbox SolarMax 3000",
    image: "https://th.bing.com/th/id/OIF.aaQ2CQpcTMMvJcGnjdpr2g?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIF.aaQ2CQpcTMMvJcGnjdpr2g?rs=1&pid=ImgDetMain",
    ],
    categories: ["Battery Power Stations", "Solar Compatible"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 30000000,
    currency: "NGN",
    description: "The Sortbox SolarMax 3000 pairs perfectly with solar panel systems to store solar energy. With built-in solar charge controllers, it allows users to store excess energy produced during the day for use at night, reducing grid dependence.",
    sku: "sortbox-solarmax-3000"
  },
  {
    id: "powerstation4",
    name: "Sortbox Essential 1000",
    image: "https://th.bing.com/th?id=OIF.s936QCisIrbHW%2fO5STs6Jw&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th?id=OIF.s936QCisIrbHW%2fO5STs6Jw&rs=1&pid=ImgDetMain",
    ],
    categories: ["Battery Power Stations", "Portable Use"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 10000000,
    currency: "NGN",
    description: "The Sortbox Essential 1000 is a portable, compact battery power station designed for emergencies and outdoor activities. Lightweight and easy to carry, it provides power for essentials like lights and phones, making it a reliable choice for those on the go.",
    sku: "sortbox-essential-1000"
  },
  {
    id: "powerstation5",
    name: "Sortbox Industrial PowerGrid 10000",
    image: "https://th.bing.com/th?id=OIF.DL2GCXNSMs%2fPvzW52jb9Iw&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th?id=OIF.DL2GCXNSMs%2fPvzW52jb9Iw&rs=1&pid=ImgDetMain",
    ],
    categories: ["Battery Power Stations", "Industrial Use"],
    sizes: ["One Size"],
    colors: ["Gray"],
    price: 100000000,
    currency: "NGN",
    description: "The Sortbox Industrial PowerGrid 10000 is a heavy-duty power station for industrial environments. With massive storage capacity and advanced power management, it supports essential operations in factories, data centers, and large facilities.",
    sku: "sortbox-powergrid-10000"
  },
];

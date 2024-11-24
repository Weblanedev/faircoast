"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Input } from "./ui/input"

export function CartSummary() {
  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [isLoading, setLoading] = useState(false)
  const isDisabled = isLoading || cartCount! === 0
  const shippingAmount = cartCount! > 0 ? 500000 : 0
  const totalAmount = totalPrice! + shippingAmount
  // console.log(formattedTotalPrice?.slice(1))
  async function onCheckout() {
    if (!name || !email || !address || !number || !expiry || !cvc) {
      return
    }
    setLoading(true)
    // const response = await fetch("/api/checkout", {
    //   method: "POST",
    //   body: JSON.stringify(cartDetails),
    // })
    // const data = await response.json()
    // const result = await redirectToCheckout(data.id)
    // if (result?.error) {
    //   console.error(result)
    // }
    setTimeout(() => {
      router.push("/success")
      setLoading(false)
    }, 7000)
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">
            NGN {formattedTotalPrice?.slice(1)}

            {/* {formatCurrencyString({ value: formattedTotalPrice, currency: "NGN" })} */}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "NGN" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {" "}
            {formatCurrencyString({ value: totalAmount, currency: "NGN" })}
          </dd>
        </div>

        <div>
          <h2 id="summary-heading" className="text-lg font-medium mt-[40px] mb-6">
            Shipping Details
          </h2>
          <div>
            <label htmlFor={`name`} className="">
              Name
            </label>
            <Input
              id={`name`}
              name={`name`}
              type="text"
              className="w-full mt-[5px]"
              min={1}
              max={9}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-[10px]">
            <label htmlFor={`email`} className="">
              Email
            </label>
            <Input
              id={`email`}
              name={`email`}
              type="email"
              className="w-full mt-[5px]"
              min={1}
              required
              max={9}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-[10px]">
            <label htmlFor={`address`} className="">
              Address
            </label>
            <Input
              id={`address`}
              name={`address`}
              type="text"
              className="w-full mt-[5px]"
              min={1}
              max={9}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 id="summary-heading" className="text-lg font-medium mt-[40px] mb-6">
            Card Details
          </h2>
          <div>
            <label htmlFor={`cardNumber`} className="">
              Card Number
            </label>
            <Input
              id={`cardNumber`}
              name={`cardNumber`}
              type="text"
              className="w-full mt-[5px]"
              min={1}
              max={9}
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex gap-[20px]">
            <div className="mt-[10px]">
              <label htmlFor={`expiry`} className="">
                Expiry Date
              </label>
              <Input
                id={`expiry`}
                name={`expiry`}
                type="expiry"
                className="w-full mt-[5px]"
                min={1}
                required
                max={9}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div className="mt-[10px]">
              <label htmlFor={`cvc`} className="">
                Card Code(CVC)
              </label>
              <Input
                id={`cvc`}
                name={`cvc`}
                type="text"
                className="w-full mt-[5px]"
                min={1}
                max={9}
                required
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
        </div>

      </dl>

      <div className="mt-6">
        <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "loading..." : "Complete Order"}
        </Button>
      </div>
    </section>
  )
}
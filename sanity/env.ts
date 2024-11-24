export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-12"

export const dataset = 'production'
export const projectId = 'q2s7zj5k'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

import { client } from "@/lib/client"
import { revalidateTag } from "next/cache";

export const sanityFetch = async (query: string) => {
  const data = await client.fetch(query, { next: { revalidate: 10 } })
  return data
}
// export const sanityFetch = async (query: string) => {
//   revalidateTag("collection")
//   const data = await client.fetch(query, { next: { tags: ["collection"]}})
//   return data
// }

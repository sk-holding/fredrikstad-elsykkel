import { client } from "@/lib/client"

export async function getBikes() {

  const query = `
    *[_type == "bikes"] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      description,
      "image": image.asset->url,
      url
    }
  `;

  const data = await client.fetch(query, { revalidate: 60})

  return data
}

export async function getArticles() {

  const query = `
    *[_type == "article"] | order(_createdAt desc) {
      title,
      content,
      "image": image.asset->url,
      url,
      buttonText
    }
  `;

  const data = await client.fetch(query, { revalidate: 60})

  return data
}
const bikeQuery = `*[_type == "bikes"] | order(title asc) {
    title,
    "currentSlug": slug.current,
    description,
    "image": image.asset->url,
    kf_url
}`

const featuredBikeQuery = `*[_type == "bikes" && featured] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    description,
    "image": image.asset->url,
    kf_url
}`

 const articleQuery = `
*[_type == "article" && kristiansand] | order(_createdAt desc) {
  title,
  content,
  "image": image.asset->url,
  url,
  buttonText
}`

const storeQuery = `
*[_type == "stores" && slug.current == "kajakk-and-fritid-kristiansand"] {
  storeName,
  storeAddress,
  "image": image.asset->url,
  url,
  slug
}
`

export { bikeQuery, articleQuery, storeQuery, featuredBikeQuery }

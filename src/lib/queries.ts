const bikeQuery = `*[_type == "bikes"] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    description,
    "image": image.asset->url,
    url
}`

 const articleQuery = `
*[_type == "article"] | order(_createdAt desc) {
  title,
  content,
  "image": image.asset->url,
  url,
  buttonText
}`

export { bikeQuery, articleQuery }

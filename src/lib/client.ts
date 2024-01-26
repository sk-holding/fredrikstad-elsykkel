import { createClient } from "next-sanity"

export const client = createClient ({
    apiVersion: process.env.SANITY_API_VERSION,
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false,
})
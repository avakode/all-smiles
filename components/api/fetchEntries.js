const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export default async function fetchEntries(type) {
  const entries = await client.getEntries(type);

  if (entries.items) {
    return entries.items
  }

  console.log(`Error getting Entries for ${contentType.name}.`)
}
const BASE_URL = 'https://rolling-api.vercel.app/7-5'
const IMG_URL = 'https://rolling-api.vercel.app'

async function GET(URL) {
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const body = await response.json()
    return body
  } catch (error) {
    console.error('Failed to get data : ', error)
    throw error
  }
}

export async function getRecipentList({ limit = 4, sort = '' } = {}) {
  return await GET(`${BASE_URL}/recipents/?limit=${limit}&sort=${sort}`)
}

export async function getCustomRecipient(url) {
  return await GET(url)
}

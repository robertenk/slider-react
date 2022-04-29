import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

const getDummyImages = async () => {
  const { data } = await axios.get('https://api.mylittleparis.com/api/articles?limit=5', {
    headers: {
      // fake API key
      Authorization: `Basic ${apiKey}`,
      Accept: 'application/json'
    }
  })

  return data.results.map(item => ({
    id: item.id,
    src: item.image,
    title: item.title
  }))
}

export default {
  getDummyImages
}

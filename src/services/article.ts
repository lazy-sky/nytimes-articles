import axios from 'axios'

const nytClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: { 'api-key': process.env.REACT_APP_API_KEY },
})

export const getArticles = async (page = 0) => {
  const {
    data: {
      response: { docs },
    },
  } = await nytClient.get('', {
    params: { page },
  })

  return { docs, nextPage: page + 1 }
}

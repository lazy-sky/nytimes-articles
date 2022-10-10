import axios from 'axios'

const nytClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: { 'api-key': process.env.REACT_APP_API_KEY },
})

export const getArticles = async (page = 0, q = '', date = '', nations = [] as string[]) => {
  const params: any = { sort: 'newest' }

  if (page) {
    params.page = page
  }

  if (q) {
    params.q = q
  }

  if (date) {
    params.begin_date = date
  }

  if (nations.length) {
    params.fq = `glocations:${nations}`
  }

  const {
    data: {
      response: { docs },
    },
  } = await nytClient.get('', {
    params,
  })

  return { docs, nextPage: page + 1 }
}

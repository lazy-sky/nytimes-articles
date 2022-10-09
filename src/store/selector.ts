import { selector } from 'recoil'

import { scrappedArticlesState } from './atom'

export const scrappedArticlesIdsState = selector({
  key: 'scrappedArticlesIds',
  get: ({ get }) => {
    const favorites = get(scrappedArticlesState)

    return favorites.map(({ _id }) => _id)
  },
})

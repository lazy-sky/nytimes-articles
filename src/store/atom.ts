import { atom, RecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const scrappedArticlesState: RecoilState<IArticle[]> = atom({
  key: 'scrappedArticles',
  default: [],
  effects: [persistAtom],
})

export const headlineQueryState = atom({
  key: 'headlineQuery',
  default: '',
})

export const dateQueryState = atom({
  key: 'dateQuery',
  default: '',
})

export const nationsQueryState = atom({
  key: 'nationsQuery',
  default: [] as string[],
})

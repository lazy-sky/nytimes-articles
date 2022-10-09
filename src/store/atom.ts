import { atom, RecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const scrappedArticlesState: RecoilState<IArticle[]> = atom({
  key: 'scrappedArticles',
  default: [],
  effects: [persistAtom],
})

import { ReactNode, createContext, useContext, useState } from 'react'
import { topWhiskies } from '../data/whiskey'

type WhiskeyInfoProviderProps = {
  children: ReactNode
}

type WhiskeyInfoContextType = {
  wImage: string
  wName: string
  wType: string
  wOccasion: string[]
  wAbv: number
  wPrice: string
  wRating: number
}

const WhiskeyInfoContext = createContext<WhiskeyInfoContextType | null>(null)

export function useWhiskeyInfoContext() {
  const value = useContext(WhiskeyInfoContext)
  if (value == null) throw new Error('Cannot use outside of WhiskeyInfoProvider')
  return value
}

export function WhiskeyInfoProvider({ children }: WhiskeyInfoProviderProps) {
  const whiskeyContextValues = topWhiskies.map((whiskey, index) => ({
    wImage: whiskey.imageUrl,
    wName: whiskey.name,
    wType: whiskey.whiskeyType,
    wOccasion: whiskey.topOccasions,
    wAbv: whiskey.abv,
    wPrice: whiskey.price,
    wRating: whiskey.averageRating,
  }))

  return <WhiskeyInfoContext.Provider value={whiskeyContextValues}>{children}</WhiskeyInfoContext.Provider>
}

import { create } from 'zustand'

interface StarStore {
  stars: number
  setStars: (count: number) => void
}

export const useStarStore = create<StarStore>((set) => ({
  stars: 100,
  setStars: (count) => set({ stars: count }),
}))

interface ProBannerStore {
  showProBanner: boolean
  setShowProBanner: (show: boolean) => void
}

export const useProBannerStore = create<ProBannerStore>((set) => ({
  showProBanner: true,
  setShowProBanner: (show) => set({ showProBanner: show }),
}))

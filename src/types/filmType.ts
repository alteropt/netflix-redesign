export type filmType = {
  id: number,
  title: string,
  image: string,
  description: string,
  ageLimit: number,
  yearRelease: number,
  genres: string[],
  seasonsAmount: number, 
  starring: string[],
  creators: string[] | null,
  isFavourite: boolean,
  isInWatchList: boolean
}

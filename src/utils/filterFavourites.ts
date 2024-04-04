import { filmType } from "../types/filmType";

export function filterFavourites(films: filmType[]) {
  return films?.filter(film => film.isFavourite)
}

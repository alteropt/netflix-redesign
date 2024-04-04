import { filmType } from "../types/filmType";

export function filterNewReleases(films: filmType[]) {
  return films?.filter(film => film.yearRelease >= 2019)
}


import { UseQueryResult } from "@tanstack/react-query"
import { createContext, useContext, useMemo } from "react"
import { filmType } from "../types/filmType"
import { filterNewReleases } from "../utils/filterNewReleases"
import { filterFavourites } from "../utils/filterFavourites"


export const FilmsContext = createContext<UseQueryResult<filmType[] | undefined, Error> | undefined>(undefined)

export const useFilmsContext = () => {
  const films = useContext(FilmsContext)

  const newReleasesFilms = useMemo(() => filterNewReleases(films!.data!), [films]) 
  const favouriteFilms = useMemo(() => filterFavourites(films!.data!), [films])

  if (films === undefined) {
    throw new Error("useFilmsContext must be used within a FilmsProvider")
  }

  return {...films, newReleasesFilms, favouriteFilms}
}


import { useMutation, useQueryClient } from "@tanstack/react-query"
import filmsService, { IHandleFavouriteState, IHandleWatchlistState } from "../services/films.service"

interface IUseFilmMutation {
  setIsFavourite: React.Dispatch<React.SetStateAction<boolean | undefined>>, 
  setIsWatchlist: React.Dispatch<React.SetStateAction<boolean | undefined>>
}


const useFilmMutation = ({setIsFavourite, setIsWatchlist}: IUseFilmMutation) => {
  const queryClient = useQueryClient()

  const isFavouriteMutation = useMutation({
    mutationFn: ({filmId, newFavouriteState}: IHandleFavouriteState) => (
      filmsService.handleFavouriteState({filmId, newFavouriteState})
    ),
    onSuccess: () => {
      setIsFavourite(prev => !prev)
      return queryClient.invalidateQueries({ queryKey: ['films'] })
    },
    mutationKey: ['films']
  })

  const isInWatchlistMutation = useMutation({
    mutationFn: ({filmId, newWatchlistState}: IHandleWatchlistState) => (
      filmsService.handleWatchlistState({filmId, newWatchlistState})
    ),
    onSuccess: () => {
      setIsWatchlist(prev => !prev)
      return queryClient.invalidateQueries({ queryKey: ['films'] })
    },
    mutationKey: ['films']
  })

  return {isFavouriteMutation, isInWatchlistMutation}
}

export default useFilmMutation


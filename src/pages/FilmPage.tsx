import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import FavouriteButton from "../components/UI/FavouriteButton";
import WatchListButton from "../components/UI/WatchListButton";
import { useQuery } from "@tanstack/react-query";
import filmsService from "../services/films.service";
import useFilmMutation from "../hooks/useFilmMutation";


const FilmPage = () => {
  const {filmId: urlId = ""} = useParams()  
  const {data: currentFilm, isLoading, isError} = useQuery({
    queryKey: ['films', urlId],
    queryFn: () => filmsService.getFilmById(+urlId)
  })

  const [isFavourite, setIsFavourite] = useState(currentFilm?.isFavourite)
  const [isWatchlist, setIsWatchlist] = useState(currentFilm?.isInWatchList)

  useEffect(() => {
    setIsFavourite(currentFilm?.isFavourite)
    setIsWatchlist(currentFilm?.isInWatchList)
  }, [isLoading])
  
  const {isInWatchlistMutation, isFavouriteMutation} = useFilmMutation({setIsFavourite, setIsWatchlist})

  const onChangeWatchlistState = () => {
    isInWatchlistMutation.mutate({filmId: currentFilm!.id, newWatchlistState: !currentFilm?.isInWatchList})
  }

  const onChangeFavouriteState = () => {
    isFavouriteMutation.mutate({filmId: currentFilm!.id, newFavouriteState: !currentFilm!.isFavourite})
  }
  
  if(isLoading || currentFilm === null) {
    return <div className="text-center mt-10">Loading...</div>
  }

  if(currentFilm === undefined) {
    return <div className="text-center mt-10">There is no such film!</div>
  }

  if(isError) {
    return <div className="text-center text-red-600 mt-10">Something went wrong!</div>
  }  

  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-5">
        <div>
          <div className="flex gap-3 items-center">
            <h2 className="text-5xl font-bold mb-4 leading-none">{currentFilm.title}</h2>
            <FavouriteButton 
              isFavourite={isFavourite as boolean}
              onClick={onChangeFavouriteState}
            />
          </div>
          <div className="flex gap-2 mb-8">
            <span>{currentFilm.seasonsAmount} {currentFilm.seasonsAmount === 1 ? 'season' : 'seasons'}</span>
            {currentFilm.genres.map(genre => (
              <span key={genre} className="border border-zinc-100 text-xs w-fit p-1 opacity-80">{genre}</span>
            ))}
            <span className="border border-zinc-100 text-xs w-fit p-1 opacity-80">{currentFilm.ageLimit}+</span>
          </div>
          <p className="font-medium mb-8">{currentFilm.description}</p>
          <div className="flex gap-2">
            <span className="font-bold">{!currentFilm.creators ? null : currentFilm.creators?.length === 1 ? 'Creator: ' : 'Creators: '}</span>
            <div className="flex gap-2">
              {currentFilm.creators?.map((creator, index) => (
                <span key={creator}>{index !== currentFilm.creators!.length - 1 ? `${creator},` : creator}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mb-8">
            <span className="font-bold">{!currentFilm.starring ? null : currentFilm.starring?.length === 1 ? 'Star: ' : 'Stars: '}</span>
            <div className="flex gap-2">
              {currentFilm.starring?.map((star, index) => (
                <span key={star}>{index !== currentFilm.starring.length - 1 ? `${star},` : star}</span>
              ))}
            </div>
          </div>

          <div>
            <WatchListButton
              isInWatchList={isWatchlist as boolean}
              onClick={onChangeWatchlistState}
            />
          </div>
        </div>
        <img src={currentFilm.image} className="block h-[500px]"/>
      </div>
    </section>
  )
}

export default FilmPage;

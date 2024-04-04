import { Link } from "react-router-dom";
import { filmType } from "../types/filmType";
import FavouriteButton from "./UI/FavouriteButton";

interface IProps {
  film: filmType,
  className?: string
}

const FilmCard = ({film, className}: IProps) => {
  return (
    <Link to={`/films/${film.id}`} className={`flex flex-col ${className}`}>
      <img src={film.image} className="h-[250px] w-full mb-1"/>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">{film.title}</h2>
        <FavouriteButton
          isFavourite={film.isFavourite}
        />
      </div>
      <div className="flex gap-2 flex-wrap mb-2">
        {film.genres.map(genre => (
          <span key={genre} className="border border-zinc-100 text-xs w-fit p-1 opacity-80">{genre}</span>
        ))}
        <span className="border border-zinc-100 text-xs w-fit p-1">{film.ageLimit}+</span>
      </div>
      <span>{film.seasonsAmount} seasons</span>
    </Link>
  )
}
export default FilmCard
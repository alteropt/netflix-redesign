import { filmType } from "../types/filmType"
import FilmCard from "./FilmCard"

interface IProps {
  isLoading: boolean, 
  films: filmType[] | undefined,
  title: string,
  isError: boolean
}

const AllFilmsSection = ({isLoading, films, title, isError}: IProps) => {
  return (
    <section className="py-10">
        <h2 className="font-medium text-3xl text-center mb-8">{title}</h2>
        {isLoading ? <div className="w-full text-center">Loading...</div> : !films?.length ?
        <div className="text-center">There are no films!</div> : isError ?
          <div className="text-center text-red-600">Something went wrong fetching the films</div> :
          <div className="grid grid-flow-row grid-cols-6 justify-between gap-6">
            {films?.map(film => (
              <FilmCard
                film={film}
                key={film.id}
              />
            ))}
          </div>
        }
      </section>
  )
}
export default AllFilmsSection
import AllFilmsSection from "../components/AllFilmsSection";
import { useFilmsContext } from "../contexts/filmsContext";

const FavouritesPage = () => {
  const {isLoading, favouriteFilms, isError} = useFilmsContext()
  
  return (
    <>
      <AllFilmsSection
        title='My favourites'
        isLoading={isLoading}
        films={favouriteFilms}
        isError={isError}
      />
    </>
  )
}
export default FavouritesPage;

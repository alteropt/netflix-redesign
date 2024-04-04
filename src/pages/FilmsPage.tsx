import AllFilmsSection from "../components/AllFilmsSection";
import { useFilmsContext } from "../contexts/filmsContext";

const FilmsPage = () => {
  const {data: films, isError, isLoading} = useFilmsContext()

  return (
    <>
      <AllFilmsSection
        films={films}
        isLoading={isLoading}
        title="All films"
        isError={isError}
      />
    </>
  )
}
export default FilmsPage;

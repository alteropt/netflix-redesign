import AllFilmsSection from "../components/AllFilmsSection";
import { useFilmsContext } from "../contexts/filmsContext";

const NewReleasesPage = () => {
  const {newReleasesFilms, isLoading, isError} = useFilmsContext()
  
  return (
    <>
      <AllFilmsSection
        title="New releases"
        films={newReleasesFilms}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  )
}
export default NewReleasesPage;

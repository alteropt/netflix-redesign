import SectionTitleLink from "../components/UI/SectionTitleLink";
import FilmsSlider from "../components/FilmsSlider";
import { useFilmsContext } from "../contexts/filmsContext";


const HomePage = () => {
  const {data: films, isError, isLoading, favouriteFilms, newReleasesFilms} = useFilmsContext()

  const pageSectionsData = [
    {
      title: 'All films',
      url: '/films',
      films: films!
    },
    {
      title: 'New releases',
      url: '/new-releases',
      films: newReleasesFilms
    },
    {
      title: 'My favourites',
      url: '/favourites',
      films: favouriteFilms
    },    
  ]
  
  if (isError) {
    return <div className="text-center text-red-600">Something went wrong fetching the films!</div>
  }

  return (
    <>
        <>
          <section className="-mt-[55px] h-screen flex items-center justify-center -ml-10 -mr-10 intro">
            <h1 className="text-6xl font-extrabold max-w-3xl text-center leading-tight">Unlimited movies, TV shows, and more</h1>
          </section>
      {
        isLoading ? <div className="h-screen w-full flex items-center justify-center">Loading...</div> :
          pageSectionsData.map(pageSectionData => (
            pageSectionData.films.length ? <section className="py-10" key={pageSectionData.title}>
              <SectionTitleLink
                title={pageSectionData.title}
                url={pageSectionData.url}
                className="mb-7"
              />
              <FilmsSlider
                films={pageSectionData.films}
              />
            </section> :
            null
          ))
        }
      </>
    </>
  )
}
export default HomePage;

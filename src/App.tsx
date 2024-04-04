import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import { FilmsContext } from "./contexts/filmsContext";
import { useQuery } from "@tanstack/react-query";
import filmsService from "./services/films.service";


const App = () => {
  const dataFilms = useQuery({
    queryKey: ['films'],
    queryFn: () => filmsService.getAllFilms()
  })

  return (
    <FilmsContext.Provider value={dataFilms}>
      <div className="container mx-auto px-10 pt-[55px] pb-[150px] relative min-h-screen">
        <Header/>
        <Layout>
          <Outlet/>
        </Layout>
        <Footer/>
      </div>
    </FilmsContext.Provider>
  )
}

export default App

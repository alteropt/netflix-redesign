import axios from "axios"
import { filmType } from "../types/filmType"

export interface IHandleFavouriteState {
  filmId: number | string, 
  newFavouriteState: boolean
}

export interface IHandleWatchlistState extends Omit<IHandleFavouriteState, "newFavouriteState"> {
  filmId: number | string, 
  newWatchlistState: boolean 
}

class FilmsService {
  private API_URL = 'https://apigenerator.dronahq.com/api/59ZnwdZz/films'
  async getAllFilms () {
    const { data } = await axios.get<filmType[] | undefined>(this.API_URL)
    return data
  }

  async getFilmById (id: number) {
    const { data } = await axios.get<filmType | undefined>(`${this.API_URL}/${id}`)
    return data
  }

  async handleFavouriteState({filmId, newFavouriteState}: IHandleFavouriteState) {
    return axios.patch(`${this.API_URL}/${filmId.toString()}`, {
      isFavourite: newFavouriteState
    })
      .catch(error => error)
    ;
  }

  async handleWatchlistState({filmId, newWatchlistState}: IHandleWatchlistState) {
    return axios.patch(`${this.API_URL}/${filmId.toString()}`, {
      isInWatchList: newWatchlistState
    })
      .catch(error => error)
    ;
  }
}

export default new FilmsService()

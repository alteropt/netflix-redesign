import { Swiper, SwiperSlide } from "swiper/react";
import { filmType } from "../types/filmType";
import FilmCard from "./FilmCard";
import { Navigation, Scrollbar } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import 'swiper/css';

interface IProps {
  films: filmType[]
}

const FilmsSlider = ({films}: IProps) => {
  if(!films.length) {
    return (
      <div className="text-red-600 font-medium text-xl">There are no films!</div>
    )
  }

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={40}
      modules={[Navigation, Scrollbar]}
      navigation
      className="my-swiper !px-9"

    >
      {films!.map((film: filmType) => {
        return (
          <SwiperSlide key={film.id} className="select-none">
            <FilmCard
              film={film}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
)
}

export default FilmsSlider;

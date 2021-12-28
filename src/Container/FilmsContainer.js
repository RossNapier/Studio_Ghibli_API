import React from "react";
import FilmList from "../Components/FilmList";
import FilmDetail from "../Components/FilmDetail";
import "./Container.css";

const FilmsContainer = () => {
    const [films, setFilms] = React.useState([]);
    const [selectedFilm, setSelectedFilm] = React.useState(null);

    React.useEffect(() => {
        getFilms();
    }, []);

    const onFilmClick = function(film) {
        setSelectedFilm(film);
    }

    const onBannerClick = function() {
        setSelectedFilm(null);
    }

    const getFilms = function(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(result => result.json())
        .then(films => setFilms(films));
    }

    return (
        <>
        Selected Film:{selectedFilm ? <FilmDetail film = {selectedFilm} onBannerClick = {onBannerClick}/> : null}
        <FilmList films = {films} onFilmClick = {onFilmClick}/>
        </>
    )
};

export default FilmsContainer;
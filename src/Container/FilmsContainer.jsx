import React from "react";
import FilmList from "../Components/FilmList";
import "./Container.css";

const FilmsContainer = () => {
    const [films, setFilms] = React.useState([]);

    React.useEffect(() => {
        getFilms();
    }, []);

    const getFilms = function(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(result => result.json())
        .then(films => setFilms(films));
    }

    return (
        <>
        <FilmList films = {films}/>
        </>
    )
};

export default FilmsContainer;
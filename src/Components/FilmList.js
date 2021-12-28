import React from "react";
import Film from "./Film";

const FilmList = ({films, onFilmClick}) => {

    const filmProfiles = films.map((film, index) => {
        return <Film film = {film} key = {index} onFilmClick = {onFilmClick}/>
    })

    return (
        <>
            <header>
            Studio Ghibli Films
            </header>
            <ol>
                {filmProfiles}
            </ol>
        </>
    )
}

export default FilmList;
import React from "react";
import Film from "./Film";

const FilmList = ({films, onFilmClick, onSortAZ}) => {

    const filmProfiles = films.map((film, index) => {
        return <Film film = {film} key = {index} onFilmClick = {onFilmClick}/>
    })

    const filmByTitle = films.slice(0);
    filmByTitle.sort(function(a,b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    });

    const filmSortAZ = filmByTitle.map((film, index) => {
        return <Film film = {film} key = {index} onFilmClick = {onFilmClick}/>
    })

    // const sortAZ = function() {
    //     onSortAZ(filmSortAZ);
    // }

    return (
        <>
            <header>
            Studio Ghibli Films
            <button>Sort</button>
            </header>
            <ol>
                {filmProfiles}
                {filmSortAZ}
            </ol>
        </>
    )
}

export default FilmList;
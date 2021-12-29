import React from "react";
import Film from "./Film";

const FilmList = ({films, onFilmClick, onSortClick, getFilms}) => {

    const filmProfiles = films.map((film, index) => {
        return <Film film = {film} key = {index} onFilmClick = {onFilmClick}/>
    })

    const filmByTitle = films.slice(0);
    filmByTitle.sort(function(a,b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    });

    const filmByRunTime = films.slice(0);
    filmByRunTime.sort(function(a,b) {
        let x = parseInt(a.running_time);
        let y = parseInt(b.running_time);
    return x < y ? -1 : x > y ? 1 : 0;
    });

    const filmByRTScore = films.slice(0);
    filmByRTScore.sort(function(a,b) {
        let x = parseInt(a.rt_score);
        let y = parseInt(b.rt_score);
    return x < y ? -1 : x > y ? 1 : 0;
    });

    const sortChron = function() {
        getFilms();
    }

    const sortTitle = function() {
        onSortClick(filmByTitle);
    }

    const sortRunTime = function() {
        onSortClick(filmByRunTime);
    }

    const sortRTScore = function() {
        onSortClick(filmByRTScore.reverse());
    }

    return (
        <>
            <header>
            <b>Studio Ghibli Films</b>
                <div id = "navbar">Sort by:
                    <button onClick = {sortChron}>Release</button>
                    <button onClick = {sortTitle}>Title</button>
                    <button onClick = {sortRunTime}>Run Time</button>
                    <button onClick = {sortRTScore}>Rotten Tomatoes Score</button>
                </div>
            </header>
            <ol>
                {filmProfiles}
            </ol>
        </>
    )
}

export default FilmList;
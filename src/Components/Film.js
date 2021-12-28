import React from "react";
import "./Film.css";

const Film = ({film, onFilmClick}) => {

    const handleClick = function() {
        onFilmClick(film);
    }

    return (
        <>
            <li>
                <div onClick = {handleClick}>
                    <img src = {film.image} alt = {film.title}></img>
                    <div class = "film-details">
                        <p class = "film-tile-title">{film.title}</p>
                        <p>{film.release_date}</p>
                    </div>
                    <p class = "rt-num">{film.rt_score}%</p>
                </div>
            </li>
        </>
    )
}

export default Film;
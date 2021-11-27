import React from "react";
import "./Film.css";

const Film = ({film}) => {
    return (
        <>
            <li class = "film-item">
                <div>
                    <img src = {film.image} alt = {film.title}></img>
                    <div class = "film-details">
                        <h2>{film.title}</h2>
                        <h3>{film.release_date}</h3>
                        <p>Rotten Tomatoes score: {film.rt_score}</p>
                        <p>Running time: {film.running_time} mins</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Film;
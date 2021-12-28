import React from "react";

const FilmDetail = ({film, onBannerClick}) => {

    const handleClick = function() {
        onBannerClick();
    }

    return(
        <div id="film-detail">
            <button id="close" onClick = {handleClick}>x</button>
            <section id = "film-desc">
                <p id="film-detail-title">{film.title} • {film.original_title} • {film.release_date}</p>
                <p>{film.description}</p>
            </section>
            <div id = "rt-score">
                RT SCORE<p class = "big-text">{film.rt_score}</p>
            </div>
            <div id = "run-time">
                RUN TIME<p class = "big-text">{film.running_time}</p>
            </div>
        </div>
    )
}

export default FilmDetail;
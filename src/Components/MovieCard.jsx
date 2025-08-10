import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  const SEARCH_URL = title.replace(/ /g, "%2B");
  console.log(SEARCH_URL);

  const MOVIES_BOX_SEARCH_LINK = `https://moviebox.ph/web/searchResult?keyword=${SEARCH_URL}&utm_source=h5seo_www.google.com`;

  return (
    <a
      className="movie-card"
      href={MOVIES_BOX_SEARCH_LINK}
      target="blank"
      rel="noopener noreferrer"
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt=""
      />

      <h3>{title}</h3>

      <div className="content">
        <div className="rating">
          <img src="star.svg" alt="" />
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>

        <span>●</span>

        <p className="lang">{original_language}</p>

        <span>●</span>

        <p className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;

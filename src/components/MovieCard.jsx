function MovieCard({movie}) {

    function onHeart() {
        alert(movie.title + " clicked!")
    }

    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="heart-btn" onClick={onHeart}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>
            </div>
        </div>
    )
}

export default MovieCard
import MovieCard from "../components/MovieCard"

function Home () {
    const movies = [
        {id: 1, title: "Movie 1", release: "2024"},
        {id: 2, title: "Movie 2", release: "2025"},
        {id: 3, title: "Movie 3", release: "1998"},
    ]
    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Movie 1", release: "2024" },
        { id: 2, title: "Movie 2", release: "2025" },
        { id: 3, title: "Movie 3", release: "1998" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit"
                    className="search-buttons">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    );
}

export default Home
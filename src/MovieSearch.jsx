import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = "c6576fd7"; // Tumhara API key

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // LocalStorage se data load karna
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
    }
  }, []);

  // LocalStorage me data save karna
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const fetchMovies = async () => {
    if (!query) {
      setError("Please enter a movie name.");
      return;
    }

    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No movies found.");
        setMovies([]);
      }
    } catch (error) {
      setError("Failed to fetch movies.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Movie Search</h1>
      <SearchBox query={query} setQuery={setQuery} fetchMovies={fetchMovies} />
      <ErrorMessage error={error} setError={setError} />
      <MovieList movies={movies} />
    </div>
  );
}

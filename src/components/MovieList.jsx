export default function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="text-gray-500 text-lg mt-4">No movies to display.</p>;
  }

  return (
    <ul className="space-y-4 mt-6">
      {movies.map((movie) => (
        <li key={movie.imdbID} className="border p-4 rounded-lg shadow-lg flex gap-4 items-center bg-white transition-transform transform hover:scale-105">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
            alt={movie.Title}
            className="w-20 h-28 object-cover rounded-md shadow-sm"
          />
          <div>
            <h2 className="font-semibold text-lg text-gray-900">{movie.Title}</h2>
            <p className="text-gray-600">Year: {movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

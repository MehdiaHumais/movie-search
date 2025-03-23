export default function SearchBox({ query, setQuery, fetchMovies }) {
  return (
    <div className="flex gap-3 mb-6 justify-center items-center bg-white p-4 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter movie name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg w-64 focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={fetchMovies}
        className="bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg- blue-600 transition duration-300"
      >
        Search
      </button>
    </div>
  );
}

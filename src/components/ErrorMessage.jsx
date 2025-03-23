export default function ErrorMessage({ error, setError }) {
  if (!error) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg max-w-sm text-center animate-fadeIn">
        <p className="text-lg font-semibold">{error}</p>
        <button
          onClick={() => setError(null)}
          className="mt-4 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

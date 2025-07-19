import { useGlobalContext } from "../context/GlobalProvider";

const Pagination = ({ totalItems, itemsPerPage }) => {
  const { pagination, setPagination } = useGlobalContext();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={() => setPagination((prev) => Math.max(prev - 1, 1))}
        disabled={pagination === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPagination(i + 1)}
          className={`px-4 py-2 rounded ${
            pagination === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setPagination((prev) => Math.min(prev + 1, totalPages))}
        disabled={pagination === totalPages}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

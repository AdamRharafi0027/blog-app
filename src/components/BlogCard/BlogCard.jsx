export default function BlogCard({
  image,
  tag,
  title,
  description,
  author,
  read,
}) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4 bg-gray-100">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tag */}
      {tag && (
        <span className="text-xs text-indigo-600 font-medium uppercase tracking-wide">
          {tag.slice(0, 12)}
        </span>
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold mt-2 line-clamp-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm line-clamp-3">
        {description || "No description available."}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {author || "Unknown author"}
          </span>
          <span className="text-xs text-gray-500">
            {read}
          </span>
        </div>

        <button className="px-4 py-2 rounded-full border border-black text-xs font-medium hover:bg-black hover:text-white transition">
          Read More
        </button>
      </div>
    </article>
  );
}

export default function BlogCard({ image, tag, title, desc, author, read }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4">
      <img src={image} className="rounded-xl mb-4" />

      <span className="text-sm text-indigo-600 font-medium">{tag}</span>

      <h2 className="text-xl font-semibold mt-2">{title}</h2>

      <p className="text-gray-600 mt-2 text-sm">{desc}</p>

      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center gap-2">
          <img src={author.avatar} className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <span className="text-gray-500 text-sm">{read} min read</span>
      </div>
    </div>
  );
}

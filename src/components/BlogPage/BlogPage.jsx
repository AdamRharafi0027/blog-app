import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const BlogPage = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await res.json();
        setBlogData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Latest Articles
        </h2>
        {loading && (
          <p className="text-center text-gray-500">
            Loading articles...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData?.articles?.slice(0, 6).map(article => (
              <BlogCard
                key={article.url}
                image={article.urlToImage}
                tag={article.source?.name}
                title={article.title}
                description={article.description}
                author={article.author || "Unknown"}
                read={new Date(article.publishedAt).toDateString()}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-14">
          <button className="px-6 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

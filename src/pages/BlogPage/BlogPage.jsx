import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { Search } from "lucide-react";

const BlogPage = ({ cardNum, hideSearch }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchVal, setSearchVal] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`;

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
  const articles = blogData?.articles || [];
const filteredArticles = articles.filter(article =>
  article.title?.toLowerCase().includes(searchVal.toLowerCase())
);
  return (
    <section className="w-full py-20">
      {/* Search Bar */}
      {!hideSearch && (
        <div className="hidden md:flex items-center bg-white/70 shadow-md backdrop-blur-lg px-4 py-2 rounded-full border border-gray-200 mx-100 mb-10">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchVal}
            onChange={(e)=>{setSearchVal(e.target.value)}}
            placeholder="Search articles..."
            className="ml-2 bg-transparent outline-none text-sm w-full py-3 px-2"
          />
        </div>
      )}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Latest Articles
        </h2>
        {loading && (
          <p className="text-center text-gray-500">Loading articles...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.slice(0, cardNum <= 0 ? 3 : cardNum)
              .map((article) => (
                <BlogCard
                  key={article.url}
                  image={article.urlToImage}
                  tag={article.source?.name}
                  title={article.title}
                  description={article.description}
                  author={article.author || "Unknown"}
                  read={new Date(article.publishedAt).toDateString()}
                  url={article.url}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;

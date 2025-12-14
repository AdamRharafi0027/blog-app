import BlogPage from "../../pages/BlogPage/BlogPage";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <>
      <BlogPage cardNum={6} hideSearch={true} />

      <div className="flex justify-center mt-14">
        <Link to={"/blog"}>
          <button className="px-6 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
            View All Articles
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogSection;

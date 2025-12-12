import React from "react";
import blogCardData from "../../blogCardData";
import BlogCard from "../BlogCard/BlogCard";

const BlogPage = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Latest Articles
        </h2>

        {/* If No Data */}
        {blogCardData.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogCardData.map((data) => (
              <BlogCard
                key={data.id}
                image={data.image}
                tag={data.tag}
                title={data.title}
                description={data.description}
                author={data.author}
                read={data.readTime}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;

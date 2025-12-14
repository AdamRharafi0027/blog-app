import React from "react";
import categoriesData from "../../categoriesData";

const CategoriesPage = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Categories
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Explore topics designed to help you improve your habits, productivity,
          and mindset.
        </p>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((cat) => (
            <div
              key={cat.id}
              className="
    group p-8 rounded-2xl border border-white/20 
    bg-white/10 backdrop-blur-lg 
    shadow-[0_0_20px_rgba(0,0,0,0.05)]
    transition-all cursor-pointer
    hover:shadow-[0_0_25px_5px_rgba(80,150,255,0.4)]
    hover:-translate-y-1 hover:bg-white/20
  "
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cat.name}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {cat.description}
              </p>

              {/* Hover Line Animation */}
              <div className="h-[2px] w-0 bg-black/70 mt-4 transition-all group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;

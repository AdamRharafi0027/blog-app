const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-300/10" />

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Become{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Better
            </span>{" "}
            Every Single Day
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Practical insights on productivity, habits, mindset, and personal
            growth — designed to help you unlock your full potential through
            small daily improvements.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/blog"
              className="px-7 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
            >
              Start Reading
            </a>

            <a
              href="/categories"
              className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Explore Topics
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/30 to-blue-200/20 blur-3xl rounded-3xl" />

          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=60"
            alt="Personal development and growth"
            className="relative rounded-3xl shadow-2xl object-cover w-full max-h-[520px]"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 bg-white/80 backdrop-blur-md shadow-lg px-5 py-3 rounded-2xl border border-gray-200">
            <p className="text-gray-700 text-sm font-medium">
              ✨ Inspiring content updated weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

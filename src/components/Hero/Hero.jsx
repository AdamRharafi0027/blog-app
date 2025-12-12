const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-28">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-300/10"></div>

      {/* Floating shapes */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Become <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Better</span>  
            Every Single Day
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Practical insights on productivity, habits, mindset, and personal growth —  
            designed to help you unlock your full potential with small daily improvements.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a 
              href="/blog"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg"
            >
              Start Reading
            </a>
            <a 
              href="/categories"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Explore Topics
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-200/20 blur-2xl rounded-3xl"></div>
          
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=60"
            alt="Personal Development"
            className="relative rounded-3xl shadow-xl object-cover w-full max-h-[500px]"
          />

          {/* Floating card */}
          <div className="absolute -bottom-6 left-6 bg-white/80 backdrop-blur-lg shadow-lg px-5 py-3 rounded-2xl border border-gray-200">
            <p className="text-gray-700 text-sm">
              ✨ Inspiring content updated every week
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const AboutPage = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          About This Blog
        </h1>

        <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
          A simple blog project focused on personal development, built to
          improve real-world React skills and frontend logic.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Why This Project Exists
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This blog was created as a <strong>training project</strong> to
              practice core React concepts such as routing, state management,
              hooks, and data fetching from external APIs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Instead of spending a lot of time on UI design decisions, the
              visual layout was generated with the help of AI. This allowed me
              to focus mainly on{" "}
              <strong>logic, structure, and clean code</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The content theme — personal development — was chosen because it
              fits naturally with learning, growth, and consistency, which
              reflects the mindset behind this project.
            </p>
          </div>

          {/* Right: Cards */}
          <div className="grid gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                What You’ll Find Here
              </h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>Articles fetched from a real external API</li>
                <li>Search and filtering functionality</li>
                <li>Reusable and clean React components</li>
                <li>Modern but simple UI structure</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Technologies Used
              </h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>React (Hooks & Components)</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>External REST APIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            This project is part of a continuous learning journey — improving
            one step at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

import { Mail, User, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello?  
            This page exists mainly to practice form handling in React.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-10">
          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          This form is for learning purposes and does not send real messages.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;

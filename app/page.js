export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-indigo-600 text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">Modern CPA</h1>
        <p className="text-xl mb-6">A premium boutique CPA firm providing expert financial services</p>
        <a href="#services" className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-600 transition duration-300">Learn More</a>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Tax Preparation</h3>
          <p className="text-gray-600">Comprehensive tax planning and preparation to minimize liabilities and maximize returns.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Financial Planning</h3>
          <p className="text-gray-600">Tailored financial strategies to help you achieve your long-term goals with ease.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Business Consulting</h3>
          <p className="text-gray-600">Consulting services to optimize your business processes and increase profitability.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Modern CPA is a boutique accounting firm specializing in providing personalized financial services. Our goal is to offer expert advice, with a commitment to excellence and client satisfaction.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-6">We'd love to hear from you! Reach out for consultations or inquiries.</p>
        <a href="mailto:info@moderncpa.com" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300">Email Us</a>
      </section>
    </div>
  );
}

export default function Header() {
    return (
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-xl font-semibold">Modern CPA</div>
  
          {/* Mobile Menu Button (For small screens) */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
  
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#services" className="text-white hover:text-indigo-200 transition duration-300">Services</a>
            <a href="#about" className="text-white hover:text-indigo-200 transition duration-300">About</a>
            <a href="#contact" className="text-white hover:text-indigo-200 transition duration-300">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#1e3a5f]">Nefi Asad Klinik</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#1e3a5f] transition">
              Home
            </button>
            <a href="https://services.nefiasadklinik.com" className="text-gray-700 hover:text-[#1e3a5f] transition">
              Services
            </a>
            <a href="https://about.nefiasadklinik.com" className="text-gray-700 hover:text-[#1e3a5f] transition">
              About
            </a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#1e3a5f] transition">
              Contact
            </button>
            <a href="tel:+1234567890" className="flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-2 rounded-full hover:bg-[#2d5082] transition">
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f]">
              Home
            </button>
            <a href="https://services.nefiasadklinik.com" className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f]">
              Services
            </a>
            <a href="https://about.nefiasadklinik.com" className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f]">
              About
            </a>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f]">
              Contact
            </button>
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-full mt-4">
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

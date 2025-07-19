import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Carte', path: '/carte#entrees' },
    { name: 'Menus', path: '/menu' },
    { name: 'Sushis', path: '/carte#sushis' },
    { name: 'Entrées', path: '/carte#entrees' },
    { name: 'Plats', path: '/carte#plats' },
    { name: 'Desserts', path: '/carte#desserts' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo + Téléphone */}
        <div className="flex items-center gap-6">
        <Link to="/" className="text-xl md:text-2xl font-bold text-red-600 whitespace-nowrap">
          Traiteur Sino Japonais
        </Link>
          <a
            href="tel:0146281870"
            className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 rounded-lg shadow transition text-sm md:text-base"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold">01 46 28 18 70</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 text-gray-800 font-medium text-sm md:text-lg">
          {navLinks.map((link, i) => (
            <li key={i} className="flex items-center gap-3">
              <Link to={link.path} className="hover:text-red-600">{link.name}</Link>
              {i < navLinks.length - 1 && <span className="hidden md:inline">|</span>}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg px-4 py-3">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium text-base">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="block w-full hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Téléphone pour mobile */}
            <li className="mt-4">
              <a
                href="tel:0146281870"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 rounded-lg shadow text-sm"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">01 46 28 18 70</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

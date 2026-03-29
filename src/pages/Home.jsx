import metro from '../assets/Accueil/metro.webp';
import boeufImg from '../assets/Accueil/platChaud.webp'
import menuImg from '../assets/Menus/menuComplet.webp'
import nemImg from '../assets/Entrees/nem_home.webp'
import sushiImg from '../assets/Sushis/sushiImg.webp'


import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';

// Avis clients mockés
const testimonials = [
  {
    name: "sophie p",
    date: "Juillet 2024",
    note: 5,
    text: "Service au top ! Le jeune homme est super agréable. La terrasse permet de profiter des beaux jours dans une ambiance conviviale. Les prix sont abordables. Les nems crevettes sont particulièrement bons.",
  },
  {
    name: "Aurélien Elsan",
    date: "Décembre 2024",
    note: 5,
    text: "De belles pièces de cuisine asiatique qui ravissent mon palais à chaque bouchée ! Je viens toujours avec plaisir ! Les portions sont généreuses et les saveurs sont bien présentes !",
  },
  {
    name: "Nora Khair",
    date: "Février 2025",
    note: 5,
    text: "Accueil professionnel service au top meilleur restaurant Asiatique du quartier. Les rouleaux de printemps un délice. Je recommande 100%",
  },
];

const specialites = [
  { title: 'Nos entrées', image: nemImg },
  { title: 'Nos plats chauds', image: boeufImg },
  { title: 'Nos sushis', image: sushiImg },
  { title: 'Nos menus', image: menuImg },
];

// Composant étoiles dynamiques
function StarRating({ rating }) {
  const total = 5;
  return (
    <div className="flex justify-center">
      {[...Array(total)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.402 8.177L12 18.896l-7.336 3.872 1.402-8.177-5.934-5.781 8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  usePageMeta(
    'Traiteur Sino-Japonais Paris 12 | Cuisine Asiatique Fait Maison',
    'Traiteur asiatique fait maison à Paris 12 (Dugommier). Nems, sushis, plats chauds, menus dès 9,90€. Ouvert tous les jours 11h–22h. ☎ 01 46 28 18 70.'
  );

  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      setShowArrow(!isAtEnd);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll(); // Init
    }

    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">

      {/* Section HÉRO */}
      <section className="relative w-full h-[70vh]">
        <img
          src="/hero.webp"
          alt="Cuisine asiatique faite maison — Traiteur Sino-Japonais Paris 12"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Traiteur Sino-Japonais
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Traiteur asiatique — Fait maison avec passion
          </p>
        </div>
      </section>

{/* Section Specialites*/}
<section className="bg-white py-12 px-6">
  <div className="relative w-full">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      Découvrez nos spécialités
    </h2>
    {/* Scroll horizontal sur mobile, grille classique sur desktop */}
    <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-4 md:gap-4 items-stretch h-[400px] md:h-auto">
      {specialites.map((item, index) => {
        // Association titres -> routes
        const routes = {
          'Nos entrées': '/carte#entrees',
          'Nos plats chauds': '/carte#plats',
          'Nos sushis': '/carte#sushis',
          'Nos menus': '/menu',
        };
      
        return (
          <Link to={routes[item.title]} key={index}>
            <div
              className="relative rounded-lg overflow-hidden h-[350px] md:h-auto md:aspect-[2/3] group cursor-pointer shadow-lg brightness-150 snap-start min-w-[80vw] md:min-w-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/60 transition duration-300 flex items-end justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once:true, amount: 0.6 }}
                  draggable={false}
                  className="text-white text-3xl md:text-5xl font-semibold italic mb-9 font-sans text-center"
                >
                  {item.title}
                </motion.h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>

    {/* Flèche de scroll (optionnelle, mobile uniquement) */}
    {showArrow && (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
      <div className="bg-white bg-opacity-70 rounded-full p-2 shadow-lg animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
)}
  </div>

{/* Section À propos de nous */}
<section className="bg-white py-16 px-6">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{once:true,amount: 0.6 }}
    className="max-w-xl mx-auto text-center"
  >
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
      À propos de nous
    </h2>
    <p className="text-md md:text-lg text-gray-700 leading-relaxed">
      Chez <span className="font-semibold text-red-700">SinoJap</span>, nous sommes fiers de proposer une cuisine asiatique
      authentique et faite maison. Inspirés des traditions culinaires chinoises et japonaises, 
      nos plats sont préparés avec passion, fraîcheur et savoir-faire.
      Installés dans le quartier du <span className="font-semibold">Boulevard de Reuilly</span> depuis plus de <span className="font-semibold">10 ans</span>, 
      nous faisons partie intégrante de la vie locale et avons à cœur de proposer une expérience chaleureuse et conviviale.
    </p>
  </motion.div>
</section>

</section>
      {/* Section AVIS CLIENTS */}
      <section className="bg-red-800 text-white py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Que pensent nos clients de nos plats ?
          </h2>

          <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-4xl font-bold mb-1">
              4.4<span className="text-2xl">/5</span>
            </p>
            <p className="text-sm text-red-100">Basé sur 99+ avis clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <a
              href="https://www.google.com/search?sa=X&sca_esv=23fc8e95f4db8408&tbm=lcl&sxsrf=AHTn8zq9qW8o4oeMgkdTHd4So5t6cCOycg:1743797597466&q=Traiteur+Sino+Japonais+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA3sDCxNDA3MrYwN7Q0MTIxMN3AyPiKUTqkKDGzJLW0SCE4My9fwSuxID8vMbNYwbEss3gRKz5ZABgFZbJXAAAA&rldimm=10708490723871942405&hl=fr-FR&ved=2ahUKEwjFu-2imL-MAxU0UaQEHa5tBV0Q9fQKegQISBAF&biw=1850&bih=968&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
            >
            <motion.div
              key={idx}
              className="h-full flex flex-col justify-between bg-white text-gray-800 rounded-lg p-4 shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-left mb-2">
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
              <StarRating rating={review.note} />
              <p className="mt-3 text-sm">{review.text}</p>
            </motion.div>
              </a>
            ))}
          </div>

          <a
            href="https://www.google.com/search?sa=X&sca_esv=23fc8e95f4db8408&tbm=lcl&sxsrf=AHTn8zq9qW8o4oeMgkdTHd4So5t6cCOycg:1743797597466&q=Traiteur+Sino+Japonais+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA3sDCxNDA3MrYwN7Q0MTIxMN3AyPiKUTqkKDGzJLW0SCE4My9fwSuxID8vMbNYwbEss3gRKz5ZABgFZbJXAAAA&rldimm=10708490723871942405&hl=fr-FR&ved=2ahUKEwjFu-2imL-MAxU0UaQEHa5tBV0Q9fQKegQISBAF&biw=1850&bih=968&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <button className="bg-white text-red-700 hover:bg-red-100 font-semibold py-2 px-6 rounded shadow transition">
              Lire les avis Google
            </button>
          </a>
        </motion.div>
      </section>
      {/* Mention légale sur les images */}
      <div className="text-center text-xs text-gray-500 mt-8 px-6">
        Certaines images présentes sur ce site sont non contractuelles et peuvent avoir été utilisées à des fins illustratives à partir de sources publiques.
      </div>


      {/* Section CONTACT */}
      <section id="contact" className="bg-white py-8 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Téléphone */}
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-red-600 mb-2" />
            <a href="tel:0146281870">
              <p className="font-semibold">Téléphone</p>
              <p className="text-sm">01 46 28 18 70</p>
            </a>
          </div>

          {/* Adresse */}
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="font-semibold">Adresse</p>
            <p className="text-sm">3 bd de Reuilly, 75012 Paris</p>
          </div>

          {/* Métro */}
          <div className="flex flex-col items-center">
            <img
              src={metro}
              alt="Logo station de métro Dugommier"
              loading="lazy"
              className="w-7 h-auto rounded shadow-md mb-2"
            />
            <p className="font-semibold">Métro</p>
            <p className="text-sm">Dugommier</p>
          </div>

          {/* Horaires */}
          <div className="flex flex-col items-center md:col-span-3">
            <Clock className="w-8 h-8 text-red-600 mb-2" />
            <p className="font-semibold">Horaires d'ouverture</p>
            <p className="text-sm">Tous les jours — 11h à 22h</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import menu1 from '../assets/Menus/menuExpress.webp';
import menu2 from '../assets/Menus/menuVapeur.webp';
import menu3 from '../assets/Menus/menuComplet.webp';
import menu4 from '../assets/Menus/menuBrochettes.webp';

const menus = [
  {
    title: 'Menu Express',
    image: menu1,
    description:  (
      <>
        2 nems ou vapeurs<br />
        Riz ou nouilles<br />
        Plat au choix (poulet, porc ou boeuf)<br />
      </>
    ),
    price: '9.90€'
  },
  {
    title: 'Menu Vapeur',
    image: menu2,
    description: (
      <>
        8 raviolis vapeur<br />
        Riz ou nouilles<br />
        1 dessert
      </>
    ),
    price: '9.90€'
  },
  {
    title: 'Menu Complet',
    image: menu3,
    description: (
      <>
        2 nems ou vapeurs<br />
        Riz ou nouilles<br />
        Plat au choix (sauf gambas)<br />
        1 dessert<br />
        1 boisson
      </>
    ),
    price: '11.90€'
  },
  {
    title: 'Menu Brochettes',
    image: menu4,
    description :(
      <>
        5 brochettes (3 yakitori poulet + 2 yakitori boeuf fromage)<br />
        Riz blanc<br />
        1 soupe miso<br />
        1 salade de choux japonais
      </>
    ),
    price: '10€'
  },
];

export default function Menus() {
  usePageMeta(
    'Nos Menus | Traiteur Sino-Japonais Paris 12',
    'Découvrez nos 4 menus asiatiques : Menu Express, Vapeur, Complet et Brochettes. À partir de 9,90€. Traiteur asiatique fait maison, Paris 12 (Dugommier).'
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-700 mb-12">
        Nos Menus
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {menus.map((menu, index) => (
          <motion.div
            key={index}
            className="bg-red-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={menu.image} alt={menu.title} loading="lazy" className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col justify-between flex-grow min-h-[260px]">
              <h2 className="text-xl font-semibold text-white mb-2">{menu.title}</h2>
              <p className="text-m text-white mb-4 whitespace-pre-line">{menu.description}</p>
              <p className="text-xl font-bold text-gray-100">{menu.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


import { motion } from 'framer-motion';
import menu1 from '../assets/Menus/menuExpress.png';
import menu2 from '../assets/Menus/menuVapeur.png';
import menu3 from '../assets/Menus/menuComplet.png';
import menu4 from '../assets/Menus/menuBrochettes.png';

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
    price: '9.00€'
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
    price: '9.00€'
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
    price: '11.00€'
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
    price: '9.50€'
  },
];

export default function Menus() {
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
            <img src={menu.image} alt={menu.title} className="w-full h-56 object-cover" />
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


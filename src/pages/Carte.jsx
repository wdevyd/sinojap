  import metro from '../assets/Accueil/metro.png';
  import { Phone, Mail, MapPin } from 'lucide-react';
  import { motion } from 'framer-motion';
  import useScrollToHash from '../hooks/ScrollToAnchor.jsx';
  import { useState } from 'react';
  import ImageModal from '../components/ImageModal.jsx';


  /* Entrees */
  import nemPorc from '../assets/Entrees/nem.jpeg';
  import rouleau_printemps from '../assets/Entrees/rouleau_printemps.jpeg'
  import samoussa from '../assets/Entrees/samoussa.jpg'
  import tempura from '../assets/Entrees/tempura.jpeg'
  import papaye from '../assets/Entrees/papaye.jpeg'
  import hakao from '../assets/Entrees/hakao.png'
  import gyoza from '../assets/Entrees/gyoza-poulet.jpg'
  import salade_choux from '../assets/Entrees/salade-de-choux.jpg'
  import vietnamiens from '../assets/Entrees/vietnamien.jpg'
  import bouchees from '../assets/Entrees/bouchees.jpg'
  import champignons from '../assets/Entrees/champignons.jpg'
  import pekinois from '../assets/Entrees/pekinois.jpg'
  import ravLegumes from '../assets/Entrees/raviolisLegume.jpg'
  import potage from '../assets/Entrees/potage-pekinois-piquant.jpg'
  
  /* Plats */
  import boeuf_oignons from '../assets/Plats/boeufOignons.jpg'
  import porcCaramel from '../assets/Plats/porcCaramel.png'
  import pouletCaramel from '../assets/Plats/pouletCaramel.png'
  import pouletCitron from '../assets/Plats/pouletCitron.jpg'
  import pouletCroustillant from '../assets/Plats/poulet_croustillant.jpeg'
  import aubergines from '../assets/Plats/aubergine.jpeg'
  import brocolis from '../assets/Plats/brocolis.jpeg'
  import boeuf_thai from '../assets/Plats/boeuf_thai.jpeg'
  import crevettes from '../assets/Plats/crevettes.jpeg'
  import patates from '../assets/Plats/patate_sautees.jpeg'
  import nouilles from '../assets/Plats/nouilles.jpeg'
  import pouletCoco from '../assets/Plats/poulet_coco.jpeg'
  import poisson from '../assets/Plats/poisson.jpeg'
  import vermicelles from '../assets/Plats/vermicelles.jpeg'
  import poulet_teriyaki from '../assets/Plats/poulet_teriyaki.jpeg'
  import riz_thai from '../assets/Plats/riz_thai.jpeg'
  import riz_cantonnais from '../assets/Plats/riz_cantonnais.jpeg'
  import tofu from '../assets/Plats/tofu.jpeg'
  import soupeRaviolis from '../assets/Plats/soupeRaviolis.png'
  import bobun from '../assets/Plats/bobun.png'
  import gambas from '../assets/Plats/gambas.jpg'
  import pouletPiquant from '../assets/Plats/pouletPiquant.png'

  /* Sushis */
  import sushi_saumon from '../assets/Sushis/sushi.jpg'
  import sushi_california from  '../assets/Sushis/sushiCalifornia.jpg'
  import sushi_maki from '../assets/Sushis/SushiMaki.png'
  import california_tempura from '../assets/Sushis/californiaTempura.jpg'
  import sushi_sashimi from '../assets/Sushis/sashimi.png'



  /* Desserts */
  import perleCoco from '../assets/Desserts/perleCoco.jpg'
  import gateauSoja from '../assets/Desserts/gateauSoja.jpg'
  import fruits from '../assets/Desserts/fruits.jpeg'
  import gingembre from '../assets/Desserts/gingembre-confit.jpg'
  import nougat from '../assets/Desserts/nougat.jpg'
  import missing from '../assets/Question_mark_alternate.svg'



  const Section = ({ title, items, id, setModalOpen, setModalImage }) => (
    <section className="pt-20 pb-10" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-md rounded-lg overflow-hidden flex gap-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-200"
              onClick={() => {
                setModalImage({ src: item.image, alt: item.name });
                setModalOpen(true);
              }}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  export default function Carte() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    useScrollToHash();
    return (
      <div className="bg-white min-h-screen flex h-full flex-col">

        {/* ENTRÉES */}
        <Section
          title="Nos Entrées"
          items={[
            { name: 'Nems au porc, poulet, légumes ou crevettes', image: nemPorc, price: '0.80€ / pièce' },
            { name: 'Rouleau de printemps', image: rouleau_printemps, price: '2.20€ / pièce' },
            { name: 'Raviolis pekinois', image: pekinois, price: '0.80€ / pièce' },
            { name: 'Gyozas au poulet', image: gyoza, price: '0.80€ / pièce' },
            { name: 'Bouchées aux crevettes', image: bouchees, price: '0.80€ / pièce' },
            { name: 'Raviolis Crevettes', image: hakao, price: '0.80€ / pièce' },
            { name: 'Raviolis Legumes', image: ravLegumes, price: '0.80€ / pièce' },
            { name: 'Samoussa au boeuf', image: samoussa, price: '1.50€ / pièce' },
            { name: 'Tempura de crevette', image: tempura, price: '1.20€ / pièce' },
            { name: 'Raviolis vietnamiens', image: vietnamiens, price: '1.20€ / pièce' },
            { name: 'Salade de choux', image: salade_choux, price: '1.80€ / 100g' },
            { name: 'Salade de champignons noirs', image: champignons, price: '2.50€ / 100g' },
            { name: 'Salade de papaye verte', image: papaye, price: '2.00€ / 100g' },
            { name: 'Potage pékinois', image: potage, price: '3.50€ / pièce' },
          ]}
          id = "entrees"
          setModalOpen={setModalOpen}
          setModalImage={setModalImage}
        />
        
        {/* Plats */}
        <Section
          title="Nos plats chauds"
          items={[
            { name: 'Poulet caramel', image: pouletCaramel, price: '2.50€ / 100g' },
            { name: 'Poulet croustillant', image: pouletCroustillant, price: '2.50€ / 100g' },
            { name: 'Poulet citron', image: pouletCitron, price: '2.50€ / 100g' },
            { name: 'Poulet Teriyaki', image: poulet_teriyaki, price: '2.50€ / 100g' },
            { name: 'Poulet curry coco', image: pouletCoco, price: '2.50€ / 100g' },
            { name: 'Poulet piquant', image: pouletPiquant, price: '2.50€ / 100g' },
            { name: 'Porc caramel', image: porcCaramel, price: '2.50€ / 100g' },
            { name: 'Poisson du chef', image: poisson, price: '3.20€ / 100g' },
            { name: 'Boeuf aux oignons', image: boeuf_oignons, price: '2.80€ / 100g' },
            { name: 'Boeuf thailandais', image: boeuf_thai, price: '2.80€ / 100g' },
            { name: 'Aubergines au basilic', image: aubergines, price: '1.80€ / 100g' },
            { name: 'Crevettes à la sauce piquante', image: crevettes, price: '3.50€ / 100g' },
            { name: 'Gambas aux sels et poivre', image: gambas, price: '4.50€ / 100g' },
            { name: 'Tofu aux légumes', image: tofu, price: '1.80€ / 100g' },
            { name: (<>Bo-bun Boeuf ou Poulet <br /> Avec nems au choix
                      </>), image: bobun, price: '9.00€' },
            { name: 'Soupe de nouilles aux raviolis crevettes', image: soupeRaviolis, price: '9.00€' },

            // Ajoute plus ici
          ]}
          id = "plats"
          setModalOpen={setModalOpen}
          setModalImage={setModalImage}
        />
        {/* Accompagnements */}
        <Section
          title="Nos accompagnements"
          items={[
            { name: 'Riz cantonnais', image: riz_cantonnais, price: '1.50€ / 100g' },
            { name: 'Riz thailandais', image: riz_thai, price: '1.50€ / pièce' },
            { name: 'Nouilles sautées natures', image: nouilles, price: '1.60€ / 100g' },
            { name: 'Vermicelles sautées', image: vermicelles, price: '1.60€ / 100g' },
            { name: 'Pommes de terre sautées', image: patates, price: '1.60€ / 100g' },
            { name: 'Legumes sautées', image: brocolis, price: '1.80€ / 100g' },
            // Ajoute plus ici
          ]}
          setModalOpen={setModalOpen}
          setModalImage={setModalImage}
        />
        {/* Sushis */}
        <Section
          title="Nos Plateaux de sushis"
          subtitle="Servis avec wasabi, salade de choux et sauce"
          items={[
            { name: 'Sushi saumon', image: sushi_saumon,price: (   <>
              6 Sushis saumon <br /> 7€
            </> )},
            { name: 'Sushi california', image: sushi_california, price: (   <>
              4 Sushis saumon + 6 Californias saumon <br /> 10€
            </> )},
            { name: 'Sushi maki', image: sushi_maki, price: (   <>
              4 Sushis saumon + 6 Californias saumon <br /> 10€
            </> )},
            { name: 'Sushi california tempura', image: california_tempura, price: (   <>
              4 Sushis saumon + 6 Californias tempura <br /> 10€
            </> )},
            { name: 'Sushi maki sashimi', image: sushi_sashimi, price: (   <>
              4 Sushis saumon + 6 makis saumon + 5 sashimis saumon <br /> 13€
            </> )},
            // Ajoute plus ici
          ]}
          id = "sushis"
          setModalOpen={setModalOpen}
          setModalImage={setModalImage}
        />
        {/* Desserts */}
        <Section
          title="Nos desserts"
          items={[
            { name: 'Perle coco nature ou chocolat', image: perleCoco, price: '1.20€ / pièce' },
            { name: 'Gâteau au soja', image: gateauSoja, price: '1.20€ / pièce' },
            { name: 'Nougats chinois', image: nougat, price: '2.00€ / pièce' },
            { name: 'Gingembre confits', image: gingembre, price: '2.00€ / pièce' },
            { name: 'Salade de fruits', image: fruits, price: '2.00€ / 100g' },

            // Ajoute plus ici
          ]}
          id = "desserts"
          setModalOpen={setModalOpen}
          setModalImage={setModalImage}
        />

        {/* Section CONTACT */}
        <section className="bg-white py-12 px-6 text-gray-800 mt-auto border-t">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-600 mb-2" />
              <p className="font-semibold">Téléphone</p>
              <p className="text-sm">06 12 34 56 78</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-600 mb-2" />
              <p className="font-semibold">Email</p>
              <p className="text-sm">contact@sinojap.fr</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-600 mb-2" />
              <p className="font-semibold">Adresse</p>
              <p className="text-sm">3 bd de Reuilly, 75012 Paris</p>
              <img
                src={metro}
                alt="station metro"
                className="w-7 h-auto rounded shadow-md mt-4"
              />
              <p className="text-sm md:text-base text-center md:text-left">
                <span className="font">Dugommier</span>
              </p>
            </div>
          </div>
        </section>
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={modalImage?.src}
          alt={modalImage?.alt}
        />
      </div>
    );
  }

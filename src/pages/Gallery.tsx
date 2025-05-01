
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  description: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1477513231469-e2c348a58e91?q=80&w=2070&auto=format&fit=crop",
    alt: "Church Interior",
    description: "The beautiful interior of St Joseph's Church during Sunday Mass",
    category: "Church Building"
  },
  {
    id: 2,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/491246376_3947335945480030_8508392936212162425_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHJ2YzGGQlwSl4hThF3ljO6O-GnkjfLmRY74aeSN8uZFvjB0JqYXJYbYPx4Y8SdKaY&_nc_ohc=FedB1Mqk3JgQ7kNvwE19ekr&_nc_oc=Adl-xKrzveapgiEnCpTFHY1vEHd9Lb8kOYFxQ_zviwKkBqR7Ji5QX_eJgeY7HgyRh0s&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=SD9SHcGv627OjPBq5jJsZw&oh=00_AfHnwtybPiWizHIVSnOrKI-8rFLxmTdNlHbGZr5kmoiGjw&oe=68193D46",
    alt: "Church Exterior",
    description: "St Joseph's Church exterior view with the bell tower",
    category: "Church Building"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1603765753376-679ac0130538?q=80&w=1974&auto=format&fit=crop",
    alt: "Christmas Celebrations",
    description: "Christmas celebrations at St Joseph's with the nativity scene",
    category: "Celebrations"
  },
  {
    id: 4,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/491117174_3949554775258147_3921047596549784066_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEF942M3l-lpeSQSX060y87W5-12ejVmsJbn7XZ6NWawkk7scRfbna8sg8I1DA08II&_nc_ohc=iz5jZ1uPmqoQ7kNvwFBOyQq&_nc_oc=AdnsQxbVuVJGzQ55ZINGxNdEyCqYrxlsAfHejnQbrOX67EX2ZIOI1xVOSZ-7PKsFqaA&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=5Ayru4RAkE0QP6kljf0wUQ&oh=00_AfGp0Y8cSAO2e6dks5JsF7iOX2EEcZvh4HyWrWe38HAekw&oe=68192B97",
    alt: "Easter Vigil",
    description: "The Easter Vigil celebration with Pascal candle & fire",
    category: "Celebrations"
  },
  {
    id: 5,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/481349014_8799030006867393_6028001388423270030_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEr8fjLTBoQWJsdmvjV4lPpdYFECRX55Tt1gUQJFfnlO_f5zTdPD10LIYBqvHBCbPs&_nc_ohc=eOewO68Y7fUQ7kNvwF1toft&_nc_oc=AdkmZCpveInSOPYAPgn1mElbewWWU3-nJE6o62gUNfd8dLtFqNBNttzlKf6xMXASiyE&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=7ax8Ia-B0IzB1nmrJI-M4A&oh=00_AfFOhVL_yZ_Cy1ZdlOLb5SVTcQ1_0c41pIwMIwB2ChHKrA&oe=6819243D",
    alt: "Altar",
    description: "The beautifully decorated altar during ordinary time",
    category: "Church Building"
  },
  {
    id: 6,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/469648365_8339365096167222_9142724713324823200_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGigca1k7SVtY-Kv9yjzu3hhVIo9eAP5MmFUij14A_kyaRcstt6kB0s2VLDl0KDDs4&_nc_ohc=KkRQnqgOyfgQ7kNvwGCNR3H&_nc_oc=Admn3PqHIIqSE0UHyZZ4uejFSyFMbSY8pD-BBnSaRpRDovYjkbCLCAactuhOcRcvZA0&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=Iq19p6ybmlIe2tRPaqz7qA&oh=00_AfE8jUx1BHu7BrDHnVOQbFYuLkhL0tlp7iBQMB5Prce5ew&oe=681953A4",
    alt: "First Communion",
    description: "Children receiving their First Holy Communion",
    category: "Sacraments"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1557599399-9d639969f976?q=80&w=2070&auto=format&fit=crop",
    alt: "Parish Gathering",
    description: "Annual parish gathering in the church hall",
    category: "Community"
  },
  {
    id: 8,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/481907906_3906115192935439_291404254776336866_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEithokuOIbZuD1isfMd2GJM0UbS7cytDEzRRtLtzK0MUZxaOrZZZ2GYuJ0H_ORGqw&_nc_ohc=sc2OlfmqFfIQ7kNvwH5lVSq&_nc_oc=AdkFz-2-2b3fRbwIxF2JCo2ELgd81JY3i4d9VV3zZCUfWMUWkICGOQ8cVJ-15b5JUU8&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=z9hhAxXXOlKd25N2lIrNtw&oh=00_AfF2VeUeOmagjDA92DavHk8rwylwFT5yqyI4eWeNBoIA5g&oe=68194AB2",
    alt: "Choir Performance",
    description: "St Joseph's choir during their Christmas performance",
    category: "Music"
  },
  {
    id: 9,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/488587630_3934166436796981_47179014682913320_n.jpg?stp=cp6_dst-jpg_p600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEnZIfy6AT0yMtZxVHuLG7QgifZ99BiHsCCJ9n30GIewLcukA5SUZ9LbiR5lSiGmm0&_nc_ohc=pKJmsos26BAQ7kNvwEmLp0J&_nc_oc=AdnWVoEbIaCQbLajD5JldGJjJwhJ_poB4kjAzpsVw-MOGztoHT9_GTcVSE9ArZExpmE&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=HxITQSaMNBura-FIgxhm6g&oh=00_AfG3OeZuMuhANsaq3MOEICpmTw9Yu_6Z9-KW64QS9XditQ&oe=681929FC",
    alt: "Youth Group",
    description: "Youth group retreat at St Joseph's",
    category: "Youth"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1601556123240-0ae756558b0b?q=80&w=2070&auto=format&fit=crop",
    alt: "Stained Glass",
    description: "Beautiful stained glass window depicting St Joseph",
    category: "Church Building"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1504252060324-1c7b2e28fbc1?q=80&w=2070&auto=format&fit=crop",
    alt: "Outdoor Procession",
    description: "Procession during the Feast of Corpus Christi",
    category: "Celebrations"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1582143633535-fd5899eaff6d?q=80&w=2071&auto=format&fit=crop",
    alt: "Bible Study",
    description: "Weekly Bible study group meeting",
    category: "Community"
  },
  {
    id: 13,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/490786333_3942450419301916_5122857923924828858_n.jpg?stp=cp6_dst-jpg_p600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEzCIkVI1GMEK2RCf7f6LZiFCd37SKjnGAUJ3ftIqOcYFpCddeQJGCWmAK6BLUY1ys&_nc_ohc=5PGm-Rpv974Q7kNvwH46m2R&_nc_oc=AdlI2RFKw4guCg07n_qsEPqQCjAmlJa-5ltthODGDhyccYg6Fvgzb921kIQzku1txyY&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=HxITQSaMNBura-FIgxhm6g&oh=00_AfFEGmJ49D8Ag5_7cd-jHAxN_C0k0jrdX7S6Rc0cdzGOWw&oe=68191BF3",
    alt: "Palm Sunday",
    description: "Palm Sunday celebration with blessed palms",
    category: "Celebrations"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1515162159-a9e80b78932c?q=80&w=2070&auto=format&fit=crop",
    alt: "Parish Fundraiser",
    description: "Annual parish fundraiser for local charities",
    category: "Community"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1520512202623-51c5c53957df?q=80&w=2069&auto=format&fit=crop",
    alt: "Baptism Ceremony",
    description: "Baptism ceremony for newest members of our parish",
    category: "Sacraments"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1594881497142-08fdfdfc4074?q=80&w=1974&auto=format&fit=crop",
    alt: "Wedding",
    description: "Beautiful wedding ceremony at St Joseph's",
    category: "Sacraments"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1567613814045-a37a56a7984b?q=80&w=1974&auto=format&fit=crop",
    alt: "Confirmation",
    description: "Confirmation ceremony with the Bishop",
    category: "Sacraments"
  },
  {
    id: 18,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/491357316_3947336178813340_6278358918561624857_n.jpg?stp=dst-jpg_p110x80_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeENabp0zK-PHFqpG37drjfLykhPVh6stuzKSE9WHqy27Gm9xbQHnfF8thXoP9ldDWw&_nc_ohc=N_C7PmOILmIQ7kNvwEjlROd&_nc_oc=Admtc1MyOnV7UE3rFc99y1Ju2t020VreMZ9voZhYhkKemThKTglQobf85p12muYWICU&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=A3IS1OKKvlz0bRvG4vzoEA&oh=00_AfHBh8ZdhB0-ieYMD6kt7ASkvTR-yPxsWxR0-x0QqTVqIQ&oe=68194FC4",
    alt: "Children's Ministry",
    description: "Children's ministry session during Stations of the Cross",
    category: "Youth"
  },
  {
    id: 19,
    src: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/481264387_3896319090581716_3033822175378621302_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHjy2huVn480H0d1SsHBdse1W1AyJ4j8enVbUDIniPx6ZB_Sl4-UkZlcx-jWRoUiwY&_nc_ohc=-8_d64YJUgIQ7kNvwGcYOW9&_nc_oc=Adl2EI177gKqt334LwU5LM_jH7xYbRYDzQCIGEZr2tm1wpHibqGBsaWsqT0sACRP2TM&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=NuUgzjBiBkEUiF7iMmAwvQ&oh=00_AfHtTSo8Lw1s8GARgTaV2DfiGhIBBXadYDtwompWi6l9hg&oe=68193951",
    alt: "A Feats Celebrations",
    description: "Special Celebrations",
    category: "Celebrations"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1987&auto=format&fit=crop",
    alt: "Parish History",
    description: "Historical photo of St Joseph's from the early days",
    category: "History"
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>("All");
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1518542448967-b4be7a7ae1cf?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Gallery</h1>
              <p className="text-xl font-light">
                Moments and memories from our parish community
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full ${
                    activeFilter === category
                      ? "bg-[#d4a760] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-gray-100 text-gray-600 mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#d4a760] mb-2">{image.alt}</h3>
                    <p className="text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

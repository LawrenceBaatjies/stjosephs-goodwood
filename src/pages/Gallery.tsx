
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
    src: "https://images.unsplash.com/photo-1438032005730-c779502df480?q=80&w=1974&auto=format&fit=crop",
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
    src: "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?q=80&w=2070&auto=format&fit=crop",
    alt: "Easter Vigil",
    description: "The Easter Vigil celebration with Pascal candle",
    category: "Celebrations"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584037005244-2f6b7f7644d6?q=80&w=2070&auto=format&fit=crop",
    alt: "Altar",
    description: "The beautifully decorated altar during ordinary time",
    category: "Church Building"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582601551298-d4953522acf0?q=80&w=2070&auto=format&fit=crop",
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
    src: "https://images.unsplash.com/photo-1589441117228-e291304a36ba?q=80&w=1938&auto=format&fit=crop",
    alt: "Choir Performance",
    description: "St Joseph's choir during their Christmas performance",
    category: "Music"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518498627959-9f60d3650c7a?q=80&w=2070&auto=format&fit=crop",
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
    src: "https://images.unsplash.com/photo-1553027522-fb0cfd86eb89?q=80&w=2070&auto=format&fit=crop",
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
    src: "https://images.unsplash.com/photo-1605433550550-39204b90a9a5?q=80&w=1974&auto=format&fit=crop",
    alt: "Children's Ministry",
    description: "Children's ministry session during Sunday School",
    category: "Youth"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1607271486087-08053887a5e3?q=80&w=1974&auto=format&fit=crop",
    alt: "Lenten Service",
    description: "Special Lenten service with Stations of the Cross",
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

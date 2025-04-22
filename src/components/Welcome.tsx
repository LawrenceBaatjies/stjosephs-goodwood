
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1601331119788-48febb5670f6?q=80&w=1974&auto=format&fit=crop"
              alt="St Joseph's Church Goodwood"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-6">Welcome to Our Parish</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                St Joseph's Parish in Goodwood has been serving the local community with faith, 
                hope and charity since 1909. Our beautiful church stands as a testament to 
                the dedication of generations of Catholics who have worshipped here.
              </p>
              <p>
                We are a vibrant, welcoming community that celebrates the Eucharist together 
                and lives the Gospel message through various ministries and outreach programs.
              </p>
              <p>
                Whether you are a long-time parishioner, new to the area, or just visiting, 
                we invite you to join us in worship and fellowship.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

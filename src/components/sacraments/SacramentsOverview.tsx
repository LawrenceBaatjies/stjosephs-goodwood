
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sacraments = [
  {
    title: "Baptism",
    description: "The sacrament that incorporates us into Christ and forms us into God's people.",
    link: "/sacraments/baptism",
    imageUrl: "/lovable-uploads/catholic-baptism.jpg",
  },
  {
    title: "Confirmation",
    description: "The sacrament that completes baptismal grace and strengthens us to be witnesses to Christ.",
    link: "/sacraments/confirmation",
    imageUrl: "/lovable-uploads/Confirmation.jpg",
  },
  {
    title: "Eucharist",
    description: "The source and summit of Christian life, celebrating the sacrifice of Jesus Christ.",
    link: "/sacraments/eucharist",
    imageUrl: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&auto=format&fit=crop",
  },
  {
    title: "Reconciliation",
    description: "The sacrament by which we receive God's healing mercy through forgiveness of sins.",
    link: "/sacraments/reconciliation",
    imageUrl: "https://images.unsplash.com/photo-1519664699825-ddb2a627c8e0?q=80&auto=format&fit=crop",
  },
  {
    title: "Anointing of the Sick",
    description: "The sacrament that brings spiritual and physical strength during illness or old age.",
    link: "/sacraments/anointing",
    imageUrl: "https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?q=80&auto=format&fit=crop",
  },
  {
    title: "Marriage",
    description: "The sacrament in which a man and a woman form an intimate partnership for the good of each other.",
    link: "/sacraments/marriage",
    imageUrl: "/lovable-uploads/Marriage.jpg",
  },
  {
    title: "Holy Orders",
    description: "The sacrament through which the mission entrusted by Christ continues in the Church.",
    link: "/sacraments/holyorders",
    imageUrl: "https://images.unsplash.com/photo-1574775845770-f42a72b09b0d?q=80&auto=format&fit=crop",
  }
];

const SacramentsOverview: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Seven Sacraments</h2>
          <p className="text-lg text-gray-700">
            The seven sacraments are ceremonies that point to what is sacred, significant and important for Christians.
            They are special occasions for experiencing God's saving presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacraments.map((sacrament) => (
            <Card key={sacrament.title} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={sacrament.imageUrl} 
                  alt={sacrament.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#d4a760]">{sacrament.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{sacrament.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-church-navy hover:bg-blue-900">
                  <Link to={sacrament.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SacramentsOverview;

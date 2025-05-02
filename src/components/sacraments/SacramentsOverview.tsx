
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SacramentCardProps {
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}

const SacramentCard: React.FC<SacramentCardProps> = ({ title, description, path, imageUrl }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-36 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg text-church-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={path}>
          <Button variant="outline" size="sm">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const SacramentsOverview: React.FC = () => {
  const sacraments: SacramentCardProps[] = [
    {
      title: "Baptism",
      description: "The first sacrament of initiation, washing away original sin and bringing one into the Church.",
      path: "/sacraments/baptism",
      imageUrl: "/lovable-uploads/catholic-baptism.jpg"
    },
    {
      title: "Eucharist",
      description: "The most blessed sacrament, in which Catholics receive the Body and Blood of Christ.",
      path: "/sacraments/eucharist",
      imageUrl: "https://images.unsplash.com/photo-1545608444-f045a6db8add?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Confirmation",
      description: "The sacrament that completes baptismal grace, sealing one with the Holy Spirit.",
      path: "/sacraments/confirmation",
      imageUrl: "/lovable-uploads/Confirmation.jpg"
    },
    {
      title: "Reconciliation",
      description: "The sacrament of healing that forgives sins committed after Baptism.",
      path: "/sacraments/reconciliation",
      imageUrl: "https://images.unsplash.com/photo-1517202745-0155735ca6f7?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Anointing of the Sick",
      description: "A sacrament of healing that provides spiritual and physical strength during illness.",
      path: "/sacraments/anointing",
      imageUrl: "https://images.unsplash.com/photo-1581579186913-45ac9e4f6d0d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Marriage",
      description: "The sacrament that unites a man and woman in an unbreakable bond before God.",
      path: "/sacraments/marriage",
      imageUrl: "/lovable-uploads/Marriage.jpg"
    },
    {
      title: "Holy Orders",
      description: "The sacrament through which the mission of Christ continues in the Church.",
      path: "/sacraments/holy-orders",
      imageUrl: "https://images.unsplash.com/photo-1504252060324-1c7b2ee5a155?q=80&w=1971&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">The Seven Sacraments</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sacraments are outward signs instituted by Christ to give grace. They are the primary ways we encounter Christ and receive His divine life. Each sacrament has a special purpose in our journey of faith.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sacraments.map((sacrament, index) => (
            <SacramentCard 
              key={index}
              title={sacrament.title}
              description={sacrament.description}
              path={sacrament.path}
              imageUrl={sacrament.imageUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            The Catholic Church recognizes seven sacraments that were instituted by Christ during his earthly ministry.
            These sacraments are divided into three categories: Sacraments of Initiation (Baptism, Confirmation, Eucharist), 
            Sacraments of Healing (Reconciliation and Anointing of the Sick), and Sacraments of Service (Holy Orders and Matrimony).
          </p>
          <p className="text-gray-600">
            To learn more about any sacrament, click on its respective "Learn More" button.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SacramentsOverview;

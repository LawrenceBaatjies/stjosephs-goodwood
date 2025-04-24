
import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray";
}

const SectionContainer = ({ 
  children, 
  className,
  background = "white" 
}: SectionContainerProps) => {
  return (
    <section className={cn(
      "py-16",
      background === "white" ? "bg-white" : "bg-church-gray",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;

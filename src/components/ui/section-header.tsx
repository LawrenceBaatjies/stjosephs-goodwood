
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2 className={cn(
      "text-3xl font-bold text-church-navy mb-8",
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionHeader;


import { Newsletter } from "./types";

// Sample PDF URL for demonstration
export const samplePdfUrl = "https://stjosephsgoodwood.hostking000.com/wp-content/uploads/2024/09/NEWSLETTER-23RD-SUNDAY.pdf";

// Initial dummy data
export const dummyNewsletters: Newsletter[] = [
  {
    id: "1",
    title: "Parish Newsletter - Easter 2025",
    date: "2025-04-15",
    fileUrl: samplePdfUrl,
    description: "Special Easter edition with Holy Week schedule and reflections. Including updates on parish activities and community news.",
    thumbnailUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Monthly Newsletter - March 2025",
    date: "2025-03-01",
    fileUrl: samplePdfUrl,
    description: "Updates on parish activities, Lenten program, and upcoming events. This month's edition includes a special message from the parish priest.",
    thumbnailUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Monthly Newsletter - February 2025",
    date: "2025-02-01",
    fileUrl: samplePdfUrl,
    description: "Parish updates, ministry spotlights, and community news. Read about the upcoming parish feast day celebrations and volunteer opportunities.",
  },
  {
    id: "4",
    title: "Christmas Special Edition - December 2024",
    date: "2024-12-20",
    fileUrl: samplePdfUrl,
    description: "Christmas Mass schedule, holiday events, and seasonal reflections.",
    thumbnailUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: "5", 
    title: "All Saints Day - November 2024",
    date: "2024-11-01",
    fileUrl: samplePdfUrl,
    description: "Special edition for All Saints Day with prayer services and community activities.",
  }
];

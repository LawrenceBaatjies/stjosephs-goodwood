
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import MassTimesPage from "./pages/MassTimesPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/FAQ";
import Registration from "./pages/Registration";
import Donation from "./pages/Donation";
import BaptismPage from "./pages/sacraments/BaptismPage";
import ConfirmationPage from "./pages/sacraments/ConfirmationPage";
import MarriagePage from "./pages/sacraments/MarriagePage";
import RCIAPage from "./pages/sacraments/RCIAPage";
import OrdinaryTimePage from "./pages/seasons/OrdinaryTimePage";
import AdventPage from "./pages/seasons/AdventPage";
import ChristmastidePage from "./pages/seasons/ChristmastidePage";
import LentPage from "./pages/seasons/LentPage";
import TriduumPage from "./pages/seasons/TriduumPage";
import EastertidePage from "./pages/seasons/EastertidePage";
import CatholicPrayersPage from "./pages/seasons/CatholicPrayersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mass-times" element={<MassTimesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/donation" element={<Donation />} />
          
          {/* Sacrament Pages */}
          <Route path="/sacraments/baptism" element={<BaptismPage />} />
          <Route path="/sacraments/confirmation" element={<ConfirmationPage />} />
          <Route path="/sacraments/marriage" element={<MarriagePage />} />
          <Route path="/sacraments/rcia" element={<RCIAPage />} />
          
          {/* Seasons Pages */}
          <Route path="/seasons/ordinary-time" element={<OrdinaryTimePage />} />
          <Route path="/seasons/advent" element={<AdventPage />} />
          <Route path="/seasons/christmastide" element={<ChristmastidePage />} />
          <Route path="/seasons/lent" element={<LentPage />} />
          <Route path="/seasons/triduum" element={<TriduumPage />} />
          <Route path="/seasons/eastertide" element={<EastertidePage />} />
          <Route path="/seasons/catholic-prayers" element={<CatholicPrayersPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

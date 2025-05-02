
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
import BulletinsPage from "./pages/BulletinsPage";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/FAQ";
import Registration from "./pages/Registration";
import Donation from "./pages/Donation";
import DonationSuccess from "./pages/DonationSuccess";
import BaptismPage from "./pages/sacraments/BaptismPage";
import ConfirmationPage from "./pages/sacraments/ConfirmationPage";
import EucharistPage from "./pages/sacraments/EucharistPage";
import ReconciliationPage from "./pages/sacraments/ReconciliationPage";
import MarriagePage from "./pages/sacraments/MarriagePage";
import AnointingPage from "./pages/sacraments/AnointingPage";
import HolyOrdersPage from "./pages/sacraments/HolyOrdersPage";
import RCIAPage from "./pages/sacraments/RCIAPage";
import SacramentsPage from "./pages/sacraments/SacramentsPage";
import OrdinaryTimePage from "./pages/seasons/OrdinaryTimePage";
import AdventPage from "./pages/seasons/AdventPage";
import ChristmastidePage from "./pages/seasons/ChristmastidePage";
import LentPage from "./pages/seasons/LentPage";
import TriduumPage from "./pages/seasons/TriduumPage";
import EastertidePage from "./pages/seasons/EastertidePage";
import CatholicPrayersPage from "./pages/seasons/CatholicPrayersPage";
import SafeguardingPolicy from "./pages/about/SafeguardingPolicy";
import EdgePage from "./pages/EdgePage";
import NewslettersPage from "./pages/NewslettersPage";
import OurLadyRosary from "./pages/OurLadyRosary";

// Parish Ministry Pages
import EvangelizationPage from "./pages/parish-ministry/EvangelizationPage";
import FaithFormationPage from "./pages/parish-ministry/FaithFormationPage";
import MarriageFamilyPage from "./pages/parish-ministry/MarriageFamilyPage";
import ParishCommunityPage from "./pages/parish-ministry/ParishCommunityPage";
import CommunityEngagementPage from "./pages/parish-ministry/CommunityEngagementPage";
import LiturgyPage from "./pages/parish-ministry/LiturgyPage";
import YouthYoungAdultPage from "./pages/parish-ministry/YouthYoungAdultPage";

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
          <Route path="/about/safeguarding" element={<SafeguardingPolicy />} />
          <Route path="/mass-times" element={<MassTimesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/bulletins" element={<BulletinsPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/edge" element={<EdgePage />} />
          <Route path="/newsletters" element={<NewslettersPage />} />
          <Route path="/our-lady-rosary" element={<OurLadyRosary />} />
          
          {/* Parish Ministry Routes */}
          <Route path="/parish-ministry/evangelization" element={<EvangelizationPage />} />
          <Route path="/parish-ministry/faith-formation" element={<FaithFormationPage />} />
          <Route path="/parish-ministry/marriage-family" element={<MarriageFamilyPage />} />
          <Route path="/parish-ministry/parish-community" element={<ParishCommunityPage />} />
          <Route path="/parish-ministry/community-engagement" element={<CommunityEngagementPage />} />
          <Route path="/parish-ministry/liturgy" element={<LiturgyPage />} />
          <Route path="/parish-ministry/youth-young-adult" element={<YouthYoungAdultPage />} />
          
          {/* Sacrament Pages */}
          <Route path="/sacraments" element={<SacramentsPage />} />
          <Route path="/sacraments/baptism" element={<BaptismPage />} />
          <Route path="/sacraments/eucharist" element={<EucharistPage />} />
          <Route path="/sacraments/confirmation" element={<ConfirmationPage />} />
          <Route path="/sacraments/reconciliation" element={<ReconciliationPage />} />
          <Route path="/sacraments/marriage" element={<MarriagePage />} />
          <Route path="/sacraments/anointing" element={<AnointingPage />} />
          <Route path="/sacraments/holy-orders" element={<HolyOrdersPage />} />
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

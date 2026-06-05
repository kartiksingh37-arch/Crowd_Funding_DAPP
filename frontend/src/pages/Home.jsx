import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CampaignList from "../components/CampaignList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <CampaignList />
    </div>
  );
};

export default Home;
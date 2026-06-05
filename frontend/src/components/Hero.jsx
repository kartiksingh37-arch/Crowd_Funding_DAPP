import { useState } from "react";
import CreateCampaignModal from "./CreateCampaignModal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Fund Ideas On The Blockchain
        </h1>

        <p className="mt-5 text-gray-500">
          Create campaigns and receive crypto donations.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 bg-purple-600 px-6 py-3 rounded-lg"
        >
          Create Campaign
        </button>
      </section>

      <CreateCampaignModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Hero;
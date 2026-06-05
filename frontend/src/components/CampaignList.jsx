import { useEffect, useState } from "react";
import { ethers } from "ethers";
import getContract from "../utils/getContract";
import { useNavigate } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  const donate = async (id) => {
    try {
      const contract = await getContract();

      const tx = await contract.donateToCampaign(id, {
        value: ethers.parseEther("0.1"),
      });

      await tx.wait();
      await loadCampaigns();
      alert("Donation Successful!");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      const contract = await getContract();

      const data = await contract.getCampaigns();

      console.log(data);

      setCampaigns(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-5xl font-bold mb-10">Campaigns</h2>

      {campaigns.length === 0 ? (
        <p>No campaigns found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id.toString()}
              campaign={campaign}
              donate={donate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CampaignList;

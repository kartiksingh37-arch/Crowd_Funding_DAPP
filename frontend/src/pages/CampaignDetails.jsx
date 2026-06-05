import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import getContract from "../utils/getContract";

const CampaignDetails = () => {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);
  const [account, setAccount] = useState("");
  const [donators, setDonators] = useState([]);

  useEffect(() => {
    loadCampaign();
    loadDonators();
    getCurrentAccount();
  }, []);

  const getCurrentAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadCampaign = async () => {
    try {
      const contract = await getContract();

      const campaigns = await contract.getCampaigns();

      setCampaign(campaigns[id]);
    } catch (err) {
      console.log(err);
    }
  };

  const loadDonators = async () => {
    try {
      const contract = await getContract();

      const data = await contract.getDonators(id);

      const addresses = data[0];
      const amounts = data[1];

      const donorList = addresses.map((address, index) => ({
        address,
        amount: ethers.formatEther(amounts[index]),
      }));

      setDonators(donorList);
    } catch (err) {
      console.log(err);
    }
  };

  const donate = async () => {
    try {
      const contract = await getContract();

      const tx = await contract.donateToCampaign(id, {
        value: ethers.parseEther("0.1"),
      });

      await tx.wait();

      await loadCampaign();
      await loadDonators();

      alert("Donation Successful!");
    } catch (err) {
      console.log(err);
    }
  };
  const cancelCampaign = async () => {
    try {
      const contract = await getContract();

      const tx = await contract.cancelCampaign(id);

      await tx.wait();

      await loadCampaign();

      alert("Campaign Cancelled!");
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawFunds = async () => {
    try {
      const contract = await getContract();

      const tx = await contract.withdrawFunds(id);

      await tx.wait();

      await loadCampaign();

      alert("Funds Withdrawn!");
    } catch (err) {
      console.log(err);
    }
  };

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-10">Loading...</div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h1 className="text-5xl font-bold mb-6">{campaign.title}</h1>

          <p className="text-gray-400 text-lg mb-8">{campaign.description}</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-500">Target</p>

              <p className="text-2xl font-bold">
                {ethers.formatEther(campaign.target)} ETH
              </p>
            </div>

            <div>
              <p className="text-gray-500">Raised</p>

              <p className="text-2xl font-bold text-green-400">
                {ethers.formatEther(campaign.amountCollected)} ETH
              </p>
            </div>
          </div>

          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden mb-3">
            <div
              className="h-4 bg-gradient-to-r from-purple-500 to-pink-500"
              style={{
                width: `${
                  (Number(campaign.amountCollected) * 100) /
                  Number(campaign.target)
                }%`,
              }}
            />
          </div>

          <p className="text-purple-400 mb-8">
            {(
              (Number(campaign.amountCollected) * 100) /
              Number(campaign.target)
            ).toFixed(2)}
            % Funded
          </p>

          <p className="text-gray-500 mb-2">Owner</p>

          <p className="break-all mb-8">{campaign.owner}</p>

          <div className="flex gap-4">
            <button
              onClick={donate}
              className="
            bg-green-600
            hover:bg-green-700
            px-6
            py-3
            rounded-xl
            "
            >
              Donate 0.1 ETH
            </button>

            {account.toLowerCase() === campaign.owner.toLowerCase() && (
              <>
                <button
                  onClick={withdrawFunds}
                  className="bg-purple-600 px-6 py-3 rounded-lg mr-3"
                >
                  Withdraw Funds
                </button>

                <button
                  onClick={cancelCampaign}
                  className="bg-red-600 px-6 py-3 rounded-lg"
                >
                  Cancel Campaign
                </button>
              </>
            )}
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-6">Donators</h2>

        {donators.map((donator, index) => (
          <div
            key={index}
            className="
          bg-gray-900
          p-4
          rounded-xl
          mb-3
          border
          border-gray-800
          "
          >
            <p className="break-all">{donator.address}</p>

            <p className="text-green-400 mt-2">{donator.amount} ETH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignDetails;

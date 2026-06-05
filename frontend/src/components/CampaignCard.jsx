import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign, donate }) => {
  const navigate = useNavigate();

  const percentage =
    (Number(campaign.amountCollected) * 100) / Number(campaign.target);

  return (
    <div
      onClick={() => navigate(`/campaign/${campaign.id}`)}
      className="
      bg-gray-900
      border border-gray-800
      rounded-3xl
      p-6
      shadow-xl
      hover:border-purple-500
      hover:-translate-y-2
      transition-all
      duration-300
      cursor-pointer
      "
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">{campaign.title}</h3>
        {Number(campaign.status) === 0 ? (
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        ) : (
          <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
            Cancelled
          </span>
        )}
      </div>

      <p className="text-gray-400 mb-6 h-12 overflow-hidden">
        {campaign.description}
      </p>

      <div className="flex justify-between mb-5">
        <div>
          <p className="text-gray-500 text-sm">Target</p>

          <p className="font-semibold">
            {ethers.formatEther(campaign.target)} ETH
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Raised</p>

          <p className="font-semibold text-green-400">
            {ethers.formatEther(campaign.amountCollected)} ETH
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            width: `${Math.min(percentage, 100)}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-purple-400">
        {percentage.toFixed(2)}% Funded
      </p>

      <button
        disabled={Number(campaign.status) !== 0}
        onClick={(e) => {
          e.stopPropagation();
          donate(campaign.id);
        }}
        className={`
    mt-5
    w-full
    py-3
    rounded-xl
    font-semibold
    ${
      Number(campaign.status) === 0
        ? "bg-purple-600 hover:bg-purple-700"
        : "bg-gray-700 cursor-not-allowed"
    }
  `}
      >
        {Number(campaign.status) === 0
          ? "Donate 0.1 ETH"
          : "Campaign Cancelled"}
      </button>
    </div>
  );
};

export default CampaignCard;

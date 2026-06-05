import { useState } from "react";
import { ethers } from "ethers";
import getContract from "../utils/getContract";

const CreateCampaignModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");

  if (!isOpen) return null;

  const createCampaign = async () => {
    try {
      const contract = await getContract();

      const targetInWei = ethers.parseEther(target);

      const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000);

      const tx = await contract.createCampaign(
        title,
        description,
        targetInWei,
        deadlineTimestamp,
      );

      await tx.wait();

      alert("Campaign Created Successfully!");

      onClose();

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-3 rounded bg-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 mb-3 rounded bg-gray-800"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Target ETH"
          className="w-full p-3 mb-3 rounded bg-gray-800"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-3 mb-3 rounded bg-gray-800"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <div className="flex gap-3">
          <button className="bg-red-500 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            onClick={createCampaign}
            className="bg-purple-600 px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaignModal;

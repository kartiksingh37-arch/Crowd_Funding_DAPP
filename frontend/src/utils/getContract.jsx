import { ethers } from "ethers";
import { contractABI } from "../contract/ABI";
import { contractAddress } from "../contract/ContractAddress";

const getContract = async () => {

  const provider =
    new ethers.BrowserProvider(window.ethereum);

  const signer =
    await provider.getSigner();

  const contract =
    new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

  return contract;
};

export default getContract;
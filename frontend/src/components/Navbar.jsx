import { useState } from "react";

const Navbar = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Install MetaMask");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);

      alert(accounts[0]);

      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">
        CrowdFundX
      </h1>

      <button
        onClick={connectWallet}
        className="bg-purple-600 px-4 py-2 rounded-lg"
      >
        {account
          ? account.slice(0, 6) + "..." + account.slice(-4)
          : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
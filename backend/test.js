const { JsonRpcProvider } = require("ethers");
require("dotenv").config();

async function main() {
  const provider = new JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

  const blockNumber = await provider.getBlockNumber();

  console.log("Connected! Latest block:", blockNumber);
}

main().catch(console.error);
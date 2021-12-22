const { ThirdwebSDK } = require('@3rdweb/sdk');
const { ethers } = require("ethers");

const PRIVATE_KEY = "0x723854406d8ce3d4331d12654a06425a9e1c7ca6185ea5f56cf750bb7050a639";
const NFT_ADDRESS = "";
const INFURA_OR_ALCHEMY_URL = "https://eth-rinkeby.alchemyapi.io/v2/_a8GMMrlr47bpg5s_fsYb0r7L5Cy5mX6";

(async () => {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_OR_ALCHEMY_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const sdk = new ThirdwebSDK(wallet);

  const gasPrice = await sdk.getGasPrice()
  console.log('gasPrice', gasPrice);

  const apps = await sdk.getApps();
  for(const app of apps) {
    console.log(`App: ${app.metadata.name} = ${app.address}`);
  }
  
  //const nft = await sdk.getNFTModule(NFT_ADDRESS);
  //const allNfts = await nft.getAll()
  //console.log(allNfts);
})()

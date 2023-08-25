// https://eth-goerli.g.alchemy.com/v2/-GLh2xDnl6nWb7e5J07P9uPMsSr_Cx2B

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const urlKey = process.env.VITE_URL_KEY;
const privKey = process.env.VITE_PRIV_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: urlKey,
      accounts: [privKey],
    },
  },
};
console.log("keys", urlKey, privKey);

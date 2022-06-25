require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const privateKey = "e8fe4cf2a788be9a38695b5e9ae19e942cc0f2c6fdf1da7110bcb542bafe8f02";
module.exports = {
  //defaultNetwork: "hardhat",
  networks: {
  //  hardhat: {
  //     chainId: 1337
  //   },
    
    mumbai: {
      // Infura
      //url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      //url: `https://polygon-mumbai.infura.io/v3/524eb350b4414d71bd6457c494ade1f2`
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.privateKey]
      //accounts: [privateKey]
    },
    /*matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


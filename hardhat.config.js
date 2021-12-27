require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    // rinkeby: {
    mumbai: {
      // url: process.env.MUMBAI_URL//process.env.ALCHEMY_KEY,
      // accounts: [process.env.MUMBAI_PRIVATE_KEY],//[process.env.PK],
        url: process.env.MUMBAI_URL || "",
        accounts: process.env.MUMBAI_PRIVATE_KEY !== undefined ? [process.env.MUMBAI_PRIVATE_KEY] : [],
        gasPrice: 10000000000,
    },
    // mainnet: {
    //   chainId: 1,
    //   url: process.env.ALCHEMY_KEY,
    //   accounts: [process.env.PK],
    // }
  },
};

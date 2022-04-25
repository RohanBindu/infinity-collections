require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const account = process.env.PRIVATE_KEY;



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/Bwsexan-l4oFprFbhIOUBWNyAUqEAYeS",
      accounts: [account.toString()]
    }
  }
};

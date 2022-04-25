//require("hardhat");
//const { ethers } = require("hardhat");
const hre = require("hardhat"); //import the hardhat

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract
  console.log("Deploying contracts with the account:", deployer.address); 
    const TheInfinityCollections = await hre.ethers.getContractFactory("TheInfinityCollections");
    const collections = await TheInfinityCollections.deploy();
    await collections.deployed(); // waiting for the contract to be deployed
    console.log("The Infinity Collections deployed to:", collections.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
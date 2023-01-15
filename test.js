const { ethers: real_ethers } = require("ethers");
const { ethers: hardhat_ethers } = require("hardhat");

console.log(real_ethers.ContractFactory);
console.log(hardhat_ethers.getContractFactory);

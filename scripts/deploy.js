const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const MultiSigFactory = await ethers.getContractFactory(
    "MultiSigFactory",
    signers[0]
  );

  console.log("Deploying MultiSig Factory Contracts....");

  const multiSigFactory = await MultiSigFactory.deploy();

  const transactionReceipt = await multiSigFactory.deployTransaction.wait(1);

  console.log(
    `Transaction Successful deployed at Address ${multiSigFactory.address}`
  );

  console.log("Here is the Transaction Receipt");

  console.log(transactionReceipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

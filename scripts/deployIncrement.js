const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const IncrementFactory = await ethers.getContractFactory(
    "Increment",
    signers[0]
  );

  console.log("Deploying Increment Contracts....");

  const IncrementContract = await IncrementFactory.deploy();

  const transactionReceipt = await IncrementContract.deployTransaction.wait(1);

  console.log(
    `Transaction Successful deployed at Address ${IncrementContract.address}`
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

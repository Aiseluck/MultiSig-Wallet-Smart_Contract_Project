const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const account = signers[0];
  const tx = {
    to: "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be", //Deployed Contract Address
    value: ethers.utils.parseEther("2", "ether"),
  };
  const transaction = await account.sendTransaction(tx);
  console.log(transaction);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

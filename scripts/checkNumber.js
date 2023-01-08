const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const IncrementContract = await ethers.getContractAt(
    "Increment",
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    signers[0]
  );

  const number = await IncrementContract.number();
  console.log(`Number is Currently ${number}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

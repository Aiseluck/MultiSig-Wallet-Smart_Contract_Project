const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const account = signers[0];
  console.log(account.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

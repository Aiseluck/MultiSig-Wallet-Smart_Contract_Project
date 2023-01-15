const { run } = require("hardhat");

async function main() {
  console.log("Verifying Smart Contract");
  await verify("0x349d9c3aeBf247C0352404E090A5d2C09a7c2e53", []);
  console.log("Verified successfully");
}

async function verify(contractAddress, args) {
  console.log("Verifying contarct....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArgument: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("already verified");
    } else {
      console.log(e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

# MultiSig Contract using Solidity Programming

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## introduction

This Project is for the Development of a MultiSig Wallet

In our `contracts` folder, we have three(3) contract

1. The `multiSig.sol:` This is where our actual implementation of our MultiSig Wallet happens

2. The `multiSigFactory.sol:` This contract implementation is for the creation of multiple multiSig Wallet on Chain,such that it stores a copy of the deployed multiSig wallet contract on chain

3. The `increment.sol:` This is for testing as on our local EVM chain as it serves as a mock contract to be tested along side the main contract

In our `scripts` folder, There lives some essential scripts

1. The `deploy.js`, A javascriots implementation of our Deployed Scripts

## Prerequisites

- Node.js
- Hardhat
- Solidity

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Aiseluck/MultiSig-Wallet-Smart_Contract_Project
```

2. Install dependencies:

```bash
yarn install
```

## Usage

1. create a `.env` file that is similar to the `.env.example` and fill in your respective environmental variable keys

2. Compile the contracts:

```shell
yarn hardhat compile
```

3. Deploy the contract:

- `Deploying on local EVM`

```shell
yarn hardhat node
yarn hardhat run scripts/deploy.js --network localhsot
```

- `Deploying on Sepolia Network`

```shell
yarn hardhat run scripts/deploy.js  --network Sepolia
```

4. Interact with the contract:

## Contributing

Contributions are welcome! If you find any bugs or have feature requests, please open an issue on GitHub. If you would like to contribute code, please fork the repository and submit a pull request.

## Live Project

This Contract is deployed on the Sepolia Network

Check Contract [here](https://sepolia.etherscan.io/address/0x349d9c3aeBf247C0352404E090A5d2C09a7c2e53#code)

If you would like to connect with me [on Twitter](https://twitter.com/Aiseluck)

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./multiSig.sol";

contract MultiSigFactory {
    event WalletDeployed(
        string indexed walletName,
        address indexed walletAddress
    );

    mapping(string => MutiSigWallet) public deployedWallets;

    function createWallet(
        string memory _walletName,
        address[] memory _owners,
        uint _numConfirmationsRequired
    ) public {
        MutiSigWallet wallet = new MutiSigWallet(
            _owners,
            _numConfirmationsRequired
        );
        deployedWallets[_walletName] = wallet;
        emit WalletDeployed(_walletName, address(wallet));
    }
}

const Web3 = require("web3");
const config = require("../../config/config");

const web3 = new Web3(config.web3Provider);
const wsWeb3 = new Web3(config.web3SocketProvider);
const contract = new web3.eth.Contract(config.contractABI, config.contractAdd);

web3.eth.accounts.wallet.add(
  "5da64c114ce63f36dd80d9ff9902eedca33699d78e68d4adbf06d7eb6b847006"
);

module.exports = { web3, contract, wsWeb3 };

const { contract, web3 } = require("../web3");

const safeMintNft = async (
  walletAddress,
  tokenUri = "https://beta-api-metadata.veefriends.com/v1/collections/0x7a3159290ba6672c3cc5741f6bcdf5261266cd15/tokens/15236"
) => {
  try {
    console.log(
      "web3.eth.accounts.wallet[0].address: ",
      web3.eth.accounts.wallet[0].address
    );
    const estimatedGas = await contract.methods
      .safeMint(walletAddress, tokenUri)
      .estimateGas({
        from: walletAddress,
      });
    console.log("estimatedGas:", estimatedGas);

    const mintNFTResponse = await contract.methods
      .safeMint(walletAddress, tokenUri)
      .send({
        from: walletAddress,
        gas: estimatedGas,
      });
    console.log("mintNFTResponse:", mintNFTResponse);
  } catch (err) {
    console.log("🚀 ~ err:", err);
    if (err && err.data) {
      console.log("Error data:", err.data);
    }
  }
};

const balanceOf = async (walletAddress) => {
  const balanceOfResponse = await contract.methods
    .balanceOf(walletAddress)
    .call();
};

const getTokenUri = async (tokenId) => {
  const tokenUriResponse = await contract.methods.tokenURI(tokenId).call();
  return tokenUriResponse;
};
module.exports = {
  safeMintNft,
  getTokenUri,
  balanceOf,
};

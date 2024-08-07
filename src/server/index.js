const http = require("http");
const { web3, wsWeb3 } = require("../web3/index");
const { eventListener } = require("../events/eventHandlers");
const { safeMintNft, getTokenUri } = require("../events/contractFunction");

const getChainId = async () => {
  const chainIdWss = await wsWeb3.eth.getChainId();
  const chainIdHttp = await web3.eth.getChainId();
  console.log("getChainId ~ chainIdHttp:", chainIdHttp, chainIdWss);
};

(async () => {
  eventListener();
  // safeMintNft("0x504162cEeE6a61A94359C189161458C93783fFae");
  // getTokenUri();
  // await getChainId();
})();

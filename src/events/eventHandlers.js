const { wsWeb3 } = require("../web3");

// Event Listeners
const eventListener = async () => {
  wsWeb3.eth
    .subscribe(
      "logs",
      {
        address: "0x950391c27f19584f2547BA164662Cd7FcA249A15",
      },
      (err, event) => {
        if (err) {
          console.error("web3.eth.subscribe ~ err:", err);
          return err;
        }

        console.log("Event", event);
      }
    )
    .on("connected", () => {
      console.log(`arbitrum is Connected.`);
    });

  // wsWeb3.eth
  // .subscribe(
  //   'logs',
  //   {
  //     address: '0xC5C3b7Ee40D0DBD5a4Fc7F809E1B71894fCaDd34',
  //   },
  //   (err, event) => {
  //     if (err) {
  //       console.error('web3.eth.subscribe ~ err:', err);
  //       return err;
  //     }

  //     console.log('Event', event);
  //   }
  // )
  // .on('connected', () => {
  //   console.log(`arbitrum is Connected.`);
  // });
};

module.exports = {
  eventListener,
};

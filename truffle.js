var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "curve adjust later dwarf service laundry knife tuna orient fat limit bar";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // from: "0x2af6231ed2f14960a394a23415849ff4e28ddefe"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/HKRA3RxqL8iTrciHlGLE ")
      },
      network_id: 3
    }
  }
}

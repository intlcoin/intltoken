var ZToken = artifacts.require("./ZToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ZToken);
};

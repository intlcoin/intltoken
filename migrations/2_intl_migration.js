var IntlToken = artifacts.require("./IntlToken.sol");

module.exports = function(deployer) {
  deployer.deploy(IntlToken);
};

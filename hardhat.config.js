require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: `${process.env.RINKEBY_ALCHMEMY_URL}`,
      accounts: [`${process.env.PRIVATE_KEY_METAMASK}`],
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

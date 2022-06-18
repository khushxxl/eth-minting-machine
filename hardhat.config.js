require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url:
        'https://eth-rinkeby.alchemyapi.io/v2/84QznWTEamOBgmDEEUnqZhZ4SUhZQF73',
      accounts: [
        '5957a3cd3e4c8f220ed43435153eab787d35c1bb10263932d515241d5baa5ccd',
      ],
    },
  },
  etherscan: {
    apiKey: 'KGDK6N9NA9B1YTTJEVSF23Z3CEBP15DUXK',
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

// PRIVATE_KEY = 5957a3cd3e4c8f220ed43435153eab787d35c1bb10263932d515241d5baa5ccd
// CONTRACT_URL=https://eth-ropsten.alchemyapi.io/v2/84QznWTEamOBgmDEEUnqZhZ4SUhZQF73

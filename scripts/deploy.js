const hre = require('hardhat')

async function main() {
  const MyNFTs = await hre.ethers.getContractFactory('MyNFTs')
  const myNfts = await MyNFTs.deploy()

  await myNfts.deployed()

  console.log('NFT contract deployed to:', myNfts.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

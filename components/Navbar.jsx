import React, { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, BigNumber } from 'ethers'
import Web3Modal from 'web3modal'
const Navbar = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: 'INFURA_ID', // required
      },
    },
  }

  const [account, setAccount] = useState('')

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        providerOptions,
        cacheProvider: true,
        disableInjectedProvider: false,
      })

      const instance = await web3Modal.connect().catch((e) => console.log(e))

      const provider = (await new ethers.providers.Web3Provider(instance)) || ''
      const signer = provider.getSigner()
      setAccount((await signer.getAddress()).toString()), console.log(account)
      console.log(account)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    connectWallet()
  })
  return (
    <div className="">
      <div className="w-full h-20 p-2  justify-center flex items-center">
        {account ? (
          <div className="p-2 bg-white rounded-xl mt-2">
            <p className="text-black font-bold text-center font-style-2 tracking-widest">
              ⚡️ Wallet Address: {account} ⚡️
            </p>
          </div>
        ) : (
          <button className="p-2 mt-2 text-black bg-white font-style-2 rounded-2xl text-md font-bold">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar

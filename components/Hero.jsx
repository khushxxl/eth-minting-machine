/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, BigNumber } from 'ethers'
import Web3Modal from 'web3modal'
import { CONTRACT_ADDRESS } from '../utils/config'
import data from '../utils/NFT.json'
import toast from 'react-hot-toast'
import Image from 'next/image'

const Hero = () => {
  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      data.abi,
      signer,
    )
    return transactionContract
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: 'INFURA_ID', // required
      },
    },
  }

  const [account, setAccount] = useState('')

  const [mintAmount, setMintAmount] = useState(1)

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

  // const fetchData = async () => {
  //   try {
  //     const myContract = await getEthereumContract()
  //     const walletMints = await myContract.walletMints(1)
  //     console.log('Wallet Mint:', walletMints)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    connectWallet()
    // fetchData()
  })
  return (
    <div className="">
      <div className="h-[68vh] flex items-center flex-col justify-start mt-36">
        <div className="text-center">
          <h1 className="text-2xl font-custom-font-1 tracking-widest text-white font-extrabold">
            NFT Minting Machine Ethereum
          </h1>
        </div>
        <div className="flex items-center space-x-10 mt-20 ">
          <div
            onClick={() => {
              if (mintAmount == 1) return
              if (mintAmount <= 3) {
                setMintAmount(mintAmount - 1)
              }
            }}
            className="p-2 bg-white rounded-full h-10 w-10 text-center cursor-pointer text-black font-bold"
          >
            <p className="font-style-2">-</p>
          </div>
          <div className="p-2 bg-white rounded-full h-10 w-10 text-center cursor-pointer text-black font-bold">
            <p className=" font-style-2">{mintAmount}</p>
          </div>
          <div
            onClick={() => {
              if (mintAmount == 3) return
              if (mintAmount >= 1) {
                setMintAmount(mintAmount + 1)
              }
            }}
            className="p-2 bg-white rounded-full h-10 w-10 text-center cursor-pointer text-black font-bold"
          >
            <p className="font-style-2">+</p>
          </div>
        </div>

        <div className="mt-5 flex items-center space-x-2 bg-black p-2 rounded-xl justify-center">
          <div className="">
            <p className="text-white tracking-[5px] font-style-2 font-bold">
              Price : 0.20
            </p>
          </div>
          <div>
            <Image
              alt=""
              src={require('../images/eth.png')}
              height={25}
              width={25}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          {account ? (
            <button
              className="p-2 font-custom-font-1 font-bold tracking-widest bg-yellow-500 rounded-xl"
              onClick={async () => {
                const notification = toast.loading('Minting NFTs..')

                try {
                  const contract = await getEthereumContract()
                  const response = await contract
                    .mint(BigNumber.from(mintAmount), {
                      value: ethers.utils.parseEther(
                        (0.2 * mintAmount).toString(),
                      ),
                    })
                    .then(() =>
                      toast.success('NFT Minted', { id: notification }),
                    )

                  console.log('response:', response)
                } catch (error) {
                  console.log(error)
                  toast.error('Whoops , something went wrong!', {
                    id: notification,
                  })
                }
              }}
            >
              Mint NFT
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="p-2 bg-yellow-500 rounded-xl font-custom-font-1 "
            >
              {' '}
              Connect Wallet To Mint
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero

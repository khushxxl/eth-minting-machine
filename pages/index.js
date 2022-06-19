/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[url('../images/metaBG.jpeg')] bg-cover bg-no-repeat h-screen w-full">
      <Head>
        <title>Minting Machine </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro:wght@200&family=Truculenta:opsz,wght@12..72,500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
        rel="stylesheet"
      ></link>

      <Navbar />

      <Hero />
    </div>
  )
}

import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'
import { TransactionContext } from '../context/TransactionContext'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded transition ease hover:bg-[#20242A]`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded mx-2 text-[0.9rem] font-semibold cursor-pointer hover:bg-[#20242A]`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#e7ecef] transition ease h-full rounded flex items-center justify-center text-[#191B1F] hover:bg-[#D2DCE1]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const { connectWallet, currentAccount } =
    useContext(TransactionContext)

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt="Uniswap" height={60} width={60} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding} ${style.buttonAccent}`}
        >
          Connect Wallet
        </div>
      </div>
      <div className={`${style.button} ${style.buttonPadding}`}>
        <div className={`${style.buttonIconContainer} mx-2`}>
          <HiOutlineDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default Header

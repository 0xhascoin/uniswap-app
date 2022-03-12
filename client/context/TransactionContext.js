import { useState, useEffect, createContext } from 'react'

export const TransactionContext = createContext()

let eth
if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install Metamask.')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error, 'Error')
      throw new Error('No ethereum object.')
    }
  }

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install Metamask.')
      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Wallet is connected.")
      }
    } catch (error) {
      console.log(error, 'Error')
      throw new Error('No ethereum object.')
    }
  }

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  )
}

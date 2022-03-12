import { useState, useEffect, createContext } from 'react'

export const TransactionContext = createContext()

let eth
if (typeof window !== 'undefined') {
  eth = window.ethereum
}

const connectWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert('Please install Metamask.')
    const accounts = await metamask.request({ method: 'eth_requestAccounts' })
  } catch (error) {
    console.log(error, 'Error')
  }
}

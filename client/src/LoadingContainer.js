import React, { useState, useEffect } from "react";
import { getWeb3, getContracts } from './utils.js';
import App from './App.js';

function LoadingContainer() {
  const [web3, setWeb3] = useState(undefined);
  // An array of Ethereum addresses that owned by current user
  const [accounts, setAccounts] = useState([]);
  const [contracts, setContracts] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const contracts = await getContracts(web3);
      const accounts = await web3.eth.getAccounts();
      setWeb3(web3);
      setContracts(contracts);
      setAccounts(accounts);
    }
    init();
    // eslint-disable-next-line
  }, []);

  // Is the component ready?
  const isReady = () => {
    return (
      typeof web3 !== 'undefined'
      && typeof contracts !== 'undefined'
      && accounts.length > 0
    );
  }

  // If the component isn't ready yet
  if (!isReady()) {
    return <div>Loading...</div>;
  }

  return (
    <App
      web3={web3}
      accounts={accounts}
      contracts={contracts}
    />
  );
}

export default LoadingContainer;

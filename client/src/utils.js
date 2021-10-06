// Conncect the front-end to the smart contract with web3
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import Dex from './contracts/Dex.json';
import ERC20Abi from './ERC20Abi.json';

const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      try {
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    reject('Install Metamask');
  });

const getContracts = async web3 => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = Dex.networks[networkId];
  const dex = new web3.eth.Contract(
    Dex.abi,
    deployedNetwork && deployedNetwork.address,
  );
  // An array of the tokens on the dex
  const tokens = await dex.methods.getTokens().call();
  // Mapping multiple inputs to a single output
  const tokenContracts = tokens.reduce((accumulator, token) => ({
    // Use "..." will accumulate the results from the previous passes
    ...accumulator,
    // Add the new dynamic key, convert byte32 to Ascii
    [web3.utils.hexToUtf8(token.ticker)]: new web3.eth.Contract(
      ERC20Abi,
      token.tokenAddress
    )
  }), {});
  // Use "..." to accumulate the multiple objects for different tokens
  return { dex, ...tokenContracts };
}

export { getWeb3, getContracts };
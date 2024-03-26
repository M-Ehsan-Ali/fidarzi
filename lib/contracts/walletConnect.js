import { ethers } from "ethers";
import PresaleAbi from "./presaleAbi.json";
import { getCryptoPrice } from "./utils";

let provider;
let contract;

export async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        return accounts[0]; // Return the connected wallet address
      } else {
        console.error("No accounts found.");
        return null;
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      return null;
    }
  } else {
    console.error("MetaMask not detected");
    return null;
  }
}


// Listen for the chainChanged event
if (typeof ethereum !== 'undefined') {
  ethereum.on('chainChanged', instanciateContract);
}

export async function instanciateContract() {

  const chainId = await ethereum.request({ method: 'eth_chainId' });
  console.log(chainId)
  if (chainId !== '0x38') {
      alert('Please connect to the BSC mainnet network');
      return;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x3524BEE3d07c2CF98cE0AC5b84dC78d8cB0dF18B";
  contract = new ethers.Contract(contractAddress, PresaleAbi, signer);
}

export async function getPrice() {
  try {
    const provider = new ethers.providers.JsonRpcProvider("https://bnb-bscnews.rpc.blxrbdn.com/");
    const contractAddress = "0x3524BEE3d07c2CF98cE0AC5b84dC78d8cB0dF18B";
    const contract = new ethers.Contract(contractAddress, PresaleAbi, provider);
    const fiziPrice =
      ethers.utils.formatEther(await contract.getPrice()) *
      (await getCryptoPrice());
    return fiziPrice;
  } catch (error) {
    console.error("Error calling getPrice:", error);
    if (error.data && error.data.message) {
      console.error("Revert reason:", error.data.message);
    }
    return null;
  }
}

export async function getFiziAmountForBNB(bnbAmount) {
  const provider = new ethers.providers.JsonRpcProvider("https://bnb-bscnews.rpc.blxrbdn.com/");
  const contractAddress = "0x3524BEE3d07c2CF98cE0AC5b84dC78d8cB0dF18B";
  const contract = new ethers.Contract(contractAddress, PresaleAbi, provider);

  if (!contract) {
    console.error("Contract not initialized.");
    return;
  }
  try {
    if (bnbAmount != "") {
      const fiziAmount = await contract.getTokensForAmount(
        ethers.utils.parseEther(bnbAmount)
      );
      return ethers.utils.formatEther(fiziAmount);
    }
    return 0;
  } catch (error) {
    console.error("Error calling getPrice:", error);
    if (error.data && error.data.message) {
      console.error("Revert reason:", error.data.message);
    }
  }
}

export async function purchaseFizi(tokenAmount, etherAmount, setLoading) { 
   if (!contract) {
    console.error("Contract not initialized.");
    return;
  }
  try {
    setLoading(true);
    const etherValue = ethers.utils.parseEther(etherAmount.toString());
    const tx = await contract.purchase(ethers.utils.parseEther(tokenAmount.toString()), {
      value: etherValue,
    });
    await tx.wait();
    setLoading(false);

    return `Purchase successful with tx hash: ${tx.hash}`;
  } catch (error) {
    console.error("Error calling purchaseFizi:", error);
    if (error.data && error.data.message) {
      console.error("Revert reason:", error.data.message);
    }
    setLoading(false);
  }
}

export function addTokenToMM() {
  // Token details
  const tokenAddress = "0x3cD60B512fAAeDDa07548c898e80fe818e076EeC";
  const tokenSymbol = "FIZI";
  const tokenDecimals = 18;

  // Add token to MetaMask
  ethereum
    .request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: "",
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log("Token added to MetaMask");
      } else {
        console.error("Failed to add token to MetaMask");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

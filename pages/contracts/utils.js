const axios = require('axios');

export function shortenAddress(address) {
    if (!address || typeof address !== "string" || address.length !== 42) {
      return "Invalid Address";
    }
  
    const prefix = address.slice(0, 6);
    const suffix = address.slice(-4);
    const shortenedAddress = `${prefix}...${suffix}`;
  
    return shortenedAddress;
  }




export const getCryptoPrice = async (cryptoId = 'binancecoin') => {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`;
        const response = await axios.get(url);
        const price = response.data[cryptoId].usd;
       return price;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

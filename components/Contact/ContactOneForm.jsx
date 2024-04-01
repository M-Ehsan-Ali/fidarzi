import {
  addTokenToMM,
  connectWallet,
  getFiziAmountForBNB,
  getPrice,
  instanciateContract,
  purchaseFizi,
} from "@/lib/contracts/walletConnect";
import { useEffect, useState } from "react";
import CustomInputSelect from "./CustomInputSelect";

const ContactOneForm = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("bnb");
  const [bnbAmount, setBnbAmount] = useState(0);
  const [fiziAmount, setFiziAmount] = useState(0);
  const [fiziPrice, setFiziPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");

  // Conversion rate: 1 BNB = 2 FIZI
  const bnbToFiziRatio = 2;

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  async function getFiziPrice() {
    setFiziPrice(await getPrice());
  }

  const handleConnectWallet = async () => {
    const connectedAddress = await connectWallet();
    if (connectedAddress) {
      setConnectedAddress(connectedAddress);
      setIsConnected(true);
    }
  };

  useEffect(() => {
    handleConnectWallet();
    instanciateContract();
    getFiziPrice();
  }, [isConnected]);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleBnbAmountChange = async (event) => {
    const bnbValue = parseFloat(event.target.value);
    setBnbAmount(bnbValue);
    setTimeout(async () => {
      const fiziAmount = await getFiziAmountForBNB(event.target.value);
      setFiziAmount(fiziAmount);
    }, 500);
  };

  const handleFiziAmountChange = (event) => {
    const fiziValue = parseFloat(event.target.value);
    setFiziAmount(fiziValue);
    // Update BNB amount based on FIZI amount
    setBnbAmount(fiziValue / bnbToFiziRatio);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("BNB Amount:", bnbAmount);
    console.log("FIZI Amount:", fiziAmount);
  };
  return (
    <div className="contact-form-wrap">
      <div className="d-flex align-items-center justify-content-center">
        <h4 className="section-link">FIZI Price: {fiziPrice?.toFixed(4)}</h4>
      </div>
      <div className="d-flex align-items-center justify-content-center form-grp">
        <h4 className="title">
          Please enter the FIZI amount you'd like to purchase
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <CustomInputSelect
            value={"bnb"}
            amount={bnbAmount}
            width="col-md-5"
            optionName="BNB"
            selectedCurrency={selectedCurrency}
            handleInputChange={handleBnbAmountChange}
            handleCurrencyChange={handleCurrencyChange}
          />
          <div className="col-md-2 form-grp d-flex align-items-center justify-content-center">
            <i
              className={`fas fa-arrow-right`}
              style={{ transform: isMobile ? "rotate(90deg)" : "none" }}
            ></i>
          </div>
          <CustomInputSelect
            value={"fizi"}
            disabled={true}
            amount={fiziAmount}
            width="col-md-5"
            optionName="FIZI"
            selectedCurrency={selectedCurrency}
            handleInputChange={() => {}}
            handleCurrencyChange={() => {}}
          />
          <div className="submit-btn text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn form-grp"
              onClick={() => purchaseFizi(0, bnbAmount, setLoading)}
            >
              Buy FIZI
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="form-grp d-flex align-items-center justify-content-center">
          <img
            src={"/img/banner/metamask.png"}
            alt="metamask"
            style={{ width: 30 }}
            className="me-2"
          />
          <h4
            className="m-0"
            style={{ cursor: "pointer" }}
            onClick={() => addTokenToMM()}
          >
            Add FIZI to Metamask
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactOneForm;

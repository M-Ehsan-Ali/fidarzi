import { useEffect, useState } from "react";
import LearnMoreButtton from "../LearnMoreButton/LearnMoreButtton";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/images/LOGO-1.png",
      alt: "",
      link: "/home",
      title: "Fidarzi App",
      description:
        "The Fidarzi App, our cornerstone platform, simplifies managing cryptocurrencies with services ranging from DeFi and CeFi wallets to P2P transfers and local currency payment options.",
    },
    {
      src: "/img/images/Icon-a2.png",
      alt: "",
      link: "/home",
      title: "High Limit VIP Debit Card",
      description:
        "Our FIZI VIP High Limit Debit Card is a game-changer, rewarding token holders and enabling spending in crypto. With unparalleled monthly limits up to $175,000 USD and single transactions up to $150,000 USD in crypto, it’s potentially the highest limit card available.",
      btn: "Launch FIZI CARD",
    },
    {
      src: "/img/images/icon-a3.png",
      alt: "",
      link: "/home",
      title: <>Community & Rewards</>,
      description:
        "The Fidarzi ecosystem actively rewards community participation with the FIZI Rewards Hub. This includes cashback, special offers, and access to exclusive events, driven by our robust referral program.",
    },
    {
      src: "/img/images/LOGO-1.png",
      alt: "",
      link: "/home",
      title: "Sercurity & control over money",
      description:
        "FIZI Pay revolutionizes crypto payments for merchants and consumers, offering a wide range of payment options from off-ramping to prepaid cards, ensuring flexibility in transactions.",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Solid App Functions</span>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        {/* <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div> */}

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
      <LearnMoreButtton
        onClick={() => {
          console.log("btn clicked");
        }}
      />
    </section>
  );
};

export default WhyChooseUs;

import { useState } from "react";
import CopyButton from "../CopyButton/CopyButton";

const Banner = () => {
  const [copyTokenText, setCopyTokenText] = useState("");
  const handleInputChange = (e) => {
    setCopyTokenText(e.target.value);
  };

  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">Making Crypto More Accessible</h2>
            </div>
            {/* Why Fidarzi */}
            <div className="section-title text-center mb-5">
              <h6 className="section-link mb-3">
                Our mission is to bridge the gap between everyday individuals
                and blockchain technology, creating a welcoming environment for
                our members to engage and utilize their crypto for an enhanced
                lifestyle.
              </h6>
              <h5 className="section-title">
                “Why Fidarzi? <span>Fidarsi</span> means trust in Italian. We
                chose a name that embodies our platform’s unique value compared
                to others.”
              </h5>
            </div>
          </div>
        </div>
        {/* Buy Now Button */}
        <div className="row justify-content-center mb-5">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        {/* Social Links For Home pages starts here */}
        <div className="row justify-content-center mb-5">
          <div
            className={"social-links col-lg-5 d-flex justify-content-between"}
          >
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* Fidarzi Video */}
        <div className="row justify-content-center mb-5">
          <div className="col-xl-8">
            <video controls width="100%" className="rounded">
              <source src={""} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Fidarzi Token Contract Address */}
        <div className="row contact-form-wrap justify-content-center mb-5">
          <div className="col-xl-8">
            <h4>Fidarzi Token Contract Address</h4>
            <div className="form-grp d-flex">
              <input
                type="text"
                disabled
                placeholder="Token..."
                required
                onChange={handleInputChange}
              />
              <CopyButton text={copyTokenText} />
            </div>
          </div>
        </div>
        {/* Fidarzi Token Contract Address ends here*/}
      </div>
    </section>
  );
};

export default Banner;

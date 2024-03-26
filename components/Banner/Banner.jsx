import CountDownOne from "../CountDown/CountDownOne";

const Banner = () => {
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
              <img src={"/img/icon/fire.png"} alt="" />
              <h2 className="title">
                Welcome to the <span>FIZI</span> Presale
              </h2>
            </div>
            <div className="section-title text-center mb-50">
              {/* <span className="sub-title">why Choose us </span> */}
              <h2 className="title">
                This is our FIZI <span>Token</span> address
              </h2>
              <h4 className="section-link" style={{ color: "#12d176" }}>
                0x3cD60B512fAAeDDa07548c898e80fe818e076EeC
              </h4>
            </div>

            {/* <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div> */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <p className="title">Start Time: March 11th, 17:33 UTC</p>
              <h2 className="title">
                TIME REMAINING TO PARTICIPATE IN PRESALE
              </h2>

              <CountDownOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

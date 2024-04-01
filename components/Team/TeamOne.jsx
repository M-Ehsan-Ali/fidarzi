const TeamOne = () => {
  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <h2 className="title">
                FIZI TRANSACTION <span>SHARING</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/plus.png"} alt="" />
              <img src={"/img/images/walet.png"} alt="" />
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-5">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">
                  <h2>All token holders share in transaction fees.</h2>
                </span>
              </div>
              <img src={"/img/images/h2_about_img.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="">
          <div className="section-title text-center mb-70">
            <h2 className="title">Take Back Control of Your Finances</h2>
            <p className="px-2">
              Recognizing the increasing public interest in Blockchain and
              Crypto, the Fidarzi Wallet will harness a simplistic and easy user
              experience. With no territorial restrictions to usage, our APP
              will open up the benefits of DeFi to people around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;

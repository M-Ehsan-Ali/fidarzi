import React from "react";

const ContactOne = () => {
  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <h2 className="title">
                <span>Featured</span> on
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center align-items-center gap-4">
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/BscScan-logo-light.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/coin_mc.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/dic_dr.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/hack_ts.png" alt="" />
            </div>
          </div>
        </div>

        {/* section form */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 text-center">
              <img src="img/images/news.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;

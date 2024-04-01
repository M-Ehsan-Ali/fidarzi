import CountDownOne from "../CountDown/CountDownOne";

const VipIdo = () => {
  return (
    <div className="section-title text-center mb-5">
      <h2 className="section-link mb-3">
        Current VIP IDO (Initial Sales Round 1)
      </h2>
      <div className="row justify-content-center">
        <div className="col-lg-10 coming-time">
          <div className="choose-item row">
            <div className="col-md-4 time-count day">
              <h4 className="section-link">500,000,000</h4>
              <p>TOKENS ALLOCATED</p>
            </div>
            <div className="col-md-4 time-count hour">
              <h4 className="section-link">$2,000,000</h4>
              <p>SEED AMOUNT RAISING</p>
            </div>
            <div className="col-md-4 time-count min">
              <h4 className="section-link">$0.004 USD</h4>
              <p>60% DISCOUNTED PRICE</p>
            </div>
            <div className="col-md-12 mt-5">
              <h2 className="title">$FIZI Token sale launching soon!</h2>
              <div className="banner-countdown-wrap text-center">
                <CountDownOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipIdo;

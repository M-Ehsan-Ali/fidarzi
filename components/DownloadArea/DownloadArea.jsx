import DoughnutChart from "../Chart/DoughnutChart";

const DownloadArea = () => {
  return (
    <section className="download-area pt-150 pb-140">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <DoughnutChart />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">
                  <h2>Fidarzi Token Allocation</h2>
                </span>
              </div>
            </div>
            <div className="section-title about-list">
              <ul className="gap-4">
                <li style={{ listStyleType: "square", color: "#CBA85D" }}>
                  50% IEO @ $0.01 USD
                </li>
                <li style={{ listStyleType: "square", color: "#EBE3A0" }}>
                  25% VIP FOUNDATION IDO SALES ROUNDS (CURRENT)
                </li>
                <li style={{ listStyleType: "square", color: "#0DAB8D" }}>
                  10% FOUNDER TOKENS (3 YEARS VESTED)
                </li>
                <li style={{ listStyleType: "square", color: "#9B4DE2" }}>
                  5% STABILITY AND LIQUIDITY RESERVES
                </li>
                <li style={{ listStyleType: "square", color: "#B79AF7" }}>
                  5% MARKETING AND BRANDING
                </li>
                <li style={{ listStyleType: "square", color: "#CAB9F9" }}>
                  3.75% IDO AFFILIATE PROGRAM
                </li>
                <li style={{ listStyleType: "square", color: "#DDD5F7" }}>
                  1.25% DEVELOPMENT TEAM REWARDS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadArea;

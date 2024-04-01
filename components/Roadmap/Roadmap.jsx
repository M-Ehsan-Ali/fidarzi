import VipIdo from "../VIPIDO/VipIdo";

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <img src="/img/images/cropped-for-SEO-front-logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section-title text-center mb-5">
          <h4 className="section-link mb-3">
            The Fidarzi Community is the core of the ecosystem and plans to
            create a community built on TRUST. We believe the world is changing,
            and we are seeing a move from “corporation first” to “community
            first.”
          </h4>
        </div>
        <div className="section-title text-center mb-5">
          <h2 className="section-link mb-3">
            Early VIP Private Pre-Sale @ $0.004 USD replace with below
          </h2>
          <p className="section-title mb-3">
            We’re offering an Early Adopter Bonus for participants in our Early
            VIP Private Pre-Sale, a token of appreciation for those who help lay
            the project’s foundation. This sale is an exclusive opportunity for
            our initial community, built and invited by our community leaders.
          </p>
          <p className="section-title mb-3">
            Holding Foundation Tokens not only grants a share in transaction
            fees but also eligibility for monthly bonuses, emphasizing our
            gratitude and the value we see in our early supporters.
          </p>
          <h6 className="section-title mb-3">
            Special Offer for Foundation Members
          </h6>
          <p className="section-title">
            Foundation members spending up to $2000 USD in this sales round will
            receive a complimentary Metal VIP Card, with annual fees waived, as
            a token of our appreciation for their support.
          </p>
          <button className="btn">NEW SALES CONTRACT</button>
        </div>
        <VipIdo />
      </div>
    </section>
  );
};

export default Roadmap;

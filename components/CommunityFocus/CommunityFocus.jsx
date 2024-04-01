const CommunityFocus = () => {
  return (
    <section id="community" className="about-area-one">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/h2_about_img.png"} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">
                  <h2>Community Focus</h2>
                </span>
              </div>
              <p>
                Fidarzi's focus on community engagement means that token holders
                share in all of the network transaction fees benefiting the
                entire community, providing what we believe to be a level of
                community ownership not found in any other token.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFocus;

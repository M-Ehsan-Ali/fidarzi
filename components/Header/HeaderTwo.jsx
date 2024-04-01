import cn from "classnames";
import $ from "jquery";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let flag = true;

const HeaderTwo = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    if (flag === true) {
      //SubMenu Dropdown Toggle
      if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($(".mobile-menu").length) {
        let mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
          "click",
          function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });
      }
    }

    flag = false;
  }, []);

  // active link switching
  const [hash, setHash] = useState("");
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setHash(asPath.split("#")[1]);
  }, [asPath]);

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap" style={{ padding: "20px 0" }}>
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <Link href={"/"}>
                      <img
                        src={"/img/logo/logo.png"}
                        alt="Fidarzi Logo"
                        style={{ width: 173 }}
                      />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li className={cn(pathname === "/home" && "active")}>
                        <Link href="/home" className={"section-link"}>
                          Home
                        </Link>
                      </li>
                      <li className={cn(pathname === "/" && "active")}>
                        <Link href="/" className={"section-link"}>
                          Sales
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className={"section-link"}>
                          Whitepaper
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>
                      <li className={"header-btn"}>
                        <button className="btn mx-3">FIZI CARD</button>
                        <button className="btn">BUY Now</button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link href="/">
                      <img
                        src={"/img/logo/logo.png"}
                        alt="fidarzi Logo"
                        title=""
                      />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->  */}
                    <ul className={"navigation"}>
                      <li className={cn(hash == "connect" && "active")}>
                        <Link href={""} className={"section-link"}>
                          FIZI CARD
                        </Link>
                      </li>
                      <li className={cn(hash == "connect" && "active")}>
                        <Link href={""} className={"section-link"}>
                          BUY Now
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;

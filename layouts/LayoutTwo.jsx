import HeaderTwo from "@/components/Header/HeaderTwo";
import cn from "classnames";
import FooterOne from "../components/Footer/FooterOne";
import PageLoader from "../components/PageLoader/PageLoader";

const LayoutOne = ({ children }) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderTwo />

      {children}

      <FooterOne />
    </div>
  );
};

export default LayoutOne;

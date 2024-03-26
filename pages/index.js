import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import ContactOneForm from "@/components/Contact/ContactOneForm";
import Roadmap from "@/components/Roadmap/Roadmap";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FIZI PRESALE</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          {/* <Banner />
          <WhoWeAre />

          <TopPartners />
          <WhyChooseUs />
          <Sales />

          <div className="area-bg">
            <Roadmap />
            <WhitePaper />
          </div>

          <TeamOne />
          <ContactOne /> */}
          <div className="mb-5">
            <Banner />
          </div>
          <div className="mb-5">
            <ContactOneForm />
          </div>
        </main>
      </LayoutOne>
    </>
  );
}

import BannerTwo from "@/components/Banner/BannerTwo";
import CommunityFocus from "@/components/CommunityFocus/CommunityFocus";
import ContactOne from "@/components/Contact/ContactOne";
import DownloadArea from "@/components/DownloadArea/DownloadArea";
import Roadmap from "@/components/Roadmap/Roadmap";
import TeamOne from "@/components/Team/TeamOne";
import TrustWith from "@/components/TrustWith/TrustWith";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutTwo from "@/layouts/LayoutTwo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FIZI PRESALE</title>
        <meta name="description" content="" />
      </Head>

      <LayoutTwo>
        <main>
          <BannerTwo />
          <CommunityFocus />
          <TrustWith />
          {/* <About /> */}
          <WhyChooseUs />
          <Roadmap />
          <TeamOne />
          <DownloadArea />
          {/* <Faq /> */}
          <ContactOne />
          {/* <WhitePaper /> */}
        </main>
      </LayoutTwo>
    </>
  );
}

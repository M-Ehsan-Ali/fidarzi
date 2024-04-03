import Banner from "@/components/Banner/Banner";
import ContactOneForm from "@/components/Contact/ContactOneForm";
import LayoutOne from "@/layouts/LayoutOne";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>FIZI PRESALE</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix mb-5">
          <Banner />
        </main>
        <ContactOneForm />
      </LayoutOne>
    </>
  );
}

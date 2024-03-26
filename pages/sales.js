import { useState, useEffect } from "react";
import Banner from "@/components/Banner/Banner";
import ContactOneForm from "@/components/Contact/ContactOneForm";
import LayoutOne from "@/layouts/LayoutOne";
import Head from "next/head";
import { ethers } from "ethers";

export default function Sales() {
  return (
    <>
      <Head>
        <title>FIZI PRESALE</title>
        <meta name="description" content="" />
      </Head>
      {/* <LayoutOne> */}
      <div className="mb-5">
        <Banner />
      </div>
      <ContactOneForm />
      {/* </LayoutOne> */}
    </>
  );
}

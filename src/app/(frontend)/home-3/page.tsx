import React from "react";
import Banner from "@/components/Frontend/Home3/Banner/Banner";
import OurProcess from "@/components/Share/OurProcess/OurProcess";
import About from "@/components/Frontend/Home3/About/About";
import Apartments from "@/components/Frontend/Home3/Apartments/Apartments";
import Featured from "@/components/Frontend/Home3/Featured/Featured";
import Cta from "@/components/Share/Cta/Cta";
import Facility from "@/components/Frontend/Home3/Facility/Facility";
import RentProperties from "@/components/Frontend/Home3/RentProperties/RentProperties";
// import Slider from "@/components/Frontend/Home3/Slider/Slider";
import Together from "@/components/Frontend/Home3/Together/Together";
import LivingSpace from "@/components/Frontend/Home3/LivingSpace/LivingSpace";
import LocalAgent from "@/components/Frontend/Home3/LocalAgent/LocalAgent";
import TopLocation from "@/components/Frontend/Home3/TopLocation/TopLocation";
import ClientReview from "@/components/Frontend/Home3/ClientReview/ClientReview";
import LatestArticles from "@/components/Frontend/Home3/LatestArticles/LatestArticles";

const page = () => {
  return (
    <>
      <Banner />
      <OurProcess />
      <About />
      <Apartments />
      <Featured />
      <Cta />
      <Facility />
      <RentProperties />
      <Together />
      {/* <Slider /> */}
      <LivingSpace />
      <LocalAgent />
      <TopLocation />
      <ClientReview />
      <LatestArticles />
    </>
  );
};

export default page;

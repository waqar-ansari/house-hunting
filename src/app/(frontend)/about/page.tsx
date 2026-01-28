import About from "@/components/Frontend/About/About/About";
import Faq from "@/components/Frontend/About/Faq/Faq";
import PropertyAgent from "@/components/Frontend/About/PropertyAgent/PropertyAgent";
import Cta from "@/components/Share/Cta/Cta";
import OurProcess from "@/components/Share/OurProcess/OurProcess";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import Testimonial from "@/components/Share/Testimonial/Testimonial";
import VideoPartner from "@/components/Share/VideoPartner/VideoPartner";
import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/about-breadcrumb.png",
          title: "About",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "About",
              link: "/about",
            },
          ],
        }}
      />
      {/* About Area */}
      <About />
      {/* Our process Area */}
      <OurProcess />
      {/* Property Agent Area */}
      <PropertyAgent />
      {/* Video  & partner Area */}
      <VideoPartner />
      {/* Testimonial Area */}
      <Testimonial />
      {/* CTA Area */}
      <Cta />
      {/* FAq Area */}
      <Faq />
    </>
  );
};

export default AboutPage;

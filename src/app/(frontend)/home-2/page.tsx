import Blog from "@/components/Frontend/Home/Blog/Blog";
import FeaturedListing from "@/components/Frontend/Home/FeaturedListing/FeaturedListing";
import AreaProperties from "@/components/Frontend/Home2/AreaProperties/AreaProperties";
import Banner from "@/components/Frontend/Home2/Banner/Banner";
import Category from "@/components/Frontend/Home2/Category/Category";
import Gallery from "@/components/Frontend/Home2/Gallery/Gallery";
import Partner from "@/components/Frontend/Home2/Partner/Partner";
import Testimonial from "@/components/Frontend/Home2/Testimonial/Testimonial";
import Video from "@/components/Frontend/Home2/Video/Video";
import Cta from "@/components/Share/Cta/Cta";
import OurProcess from "@/components/Share/OurProcess/OurProcess";
import React from "react";

const HomePage2 = () => {
  return (
    <>
      {/* Banner Area */}
      <Banner />
      {/* Category Area */}
      <Category />
      {/* Our Process Area */}
      <OurProcess />
      {/* Featured Listing Area */}
      <FeaturedListing />
      {/* CTA Area */}
      <Cta />
      {/* Area Properties Area */}
      <AreaProperties />
      {/* Partner Area */}
      <Partner />
      {/* Video Area */}
      <Video />
      {/* testimonial Area */}
      <Testimonial />
      {/* Gallery Area */}

      <Gallery />
      {/* Blog Area */}
      <Blog />
    </>
  );
};

export default HomePage2;

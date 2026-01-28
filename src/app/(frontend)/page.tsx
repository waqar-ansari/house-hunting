import Cta from "@/components/Share/Cta/Cta";
import OurProcess from "@/components/Share/OurProcess/OurProcess";

import VideoPartner from "@/components/Share/VideoPartner/VideoPartner";
import Testimonial from "@/components/Share/Testimonial/Testimonial";
import Banner from "@/components/Frontend/Home/Banner/Banner";
import PopularPlace from "@/components/Frontend/Home/PopularPlace/PopularPlace";
import SaleProperties from "@/components/Frontend/Home/SaleProperties/SaleProperties";
import FeaturedListing from "@/components/Frontend/Home/FeaturedListing/FeaturedListing";
import RentalProperties from "@/components/Frontend/Home/RentalProperties/RentalProperties";
import ApartmentSketch from "@/components/Frontend/Home/ApartmentSketch/ApartmentSketch";
import Blog from "@/components/Frontend/Home/Blog/Blog";

const HomePage = () => {
  return (
    <>
      {/* Banner Area */}
      <Banner />
      {/* Popular Place Area */}
      <PopularPlace />
      {/*Sale Property Area */}
      <SaleProperties />
      {/*Featured properties Area */}
      <FeaturedListing />
      {/* CTA Area */}
      <Cta />
      {/* Rental Properties Area*/}
      <RentalProperties />
      {/* Our Process Area*/}
      <OurProcess />
      {/* Apartment Sketch Area */}
      <ApartmentSketch />
      {/* Video & partner Area */}
      <VideoPartner />
      {/* Testimonial Area */}
      <Testimonial />
      {/* Blog Area */}
      <Blog />
    </>
  );
};

export default HomePage;

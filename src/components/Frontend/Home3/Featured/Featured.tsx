"use client";
import PropertyItem from "@/components/Share/PropertyItem/PropertyItem";
import { Col, Row } from "antd";
import Link from "next/link";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import avatar1 from "@/images/Avater1.png";
import avatar2 from "@/images/Avater2.png";
import avatar3 from "@/images/Avater3.png";
import { useState } from "react";
import styles from "./featured.module.css";
import Slider from "react-slick";

const Featured = () => {
  const [propertiesTab, setPropertiesTab] = useState<string>("all");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const properties = [
    {
      thumbnail: propertyImg1,
      avatarImg: avatar1,
      title: "Luxury Family home",
      type: "For Rent",
      price: 796.59,
      info: { size: "1200", beds: "2", baths: "1" },
      location: "4517 Washington Ave. Manchester",
      propertyType: "Modern House",
    },
    {
      thumbnail: propertyImg2,
      avatarImg: avatar2,
      title: "Ready home for sale",
      type: "For Sale",
      price: 800.59,
      info: { size: "1200", beds: "2", baths: "1" },
      location: "4517 Washington Ave. Manchester",
      propertyType: "Modern House",
    },
    {
      thumbnail: propertyImg3,
      avatarImg: avatar3,
      title: "Jacks Restaurant For Rent",
      type: "For Rent",
      price: 900.59,
      info: { size: "1200", beds: "2", baths: "1" },
      location: "4517 Washington Ave. Manchester",
      propertyType: "Modern House",
    },
  ];
  return (
    <section className="ic_section_space ic_featured">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13} lg={15}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Property</p>
              <h2 className="ic_title ic_title_color ">Featured Listings</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode. You can list specific properties categories, types,
                cities, areas.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_property_listing_tab}>
          <button
            className={propertiesTab === "all" ? styles.active : ""}
            onClick={() => setPropertiesTab("all")}
          >
            All Properties
          </button>
          <button
            className={propertiesTab === "sale" ? styles.active : ""}
            onClick={() => setPropertiesTab("sale")}
          >
            For Sale
          </button>
          <button
            className={propertiesTab === "rent" ? styles.active : ""}
            onClick={() => setPropertiesTab("rent")}
          >
            For Rent
          </button>
          <button
            className={propertiesTab === "buy" ? styles.active : ""}
            onClick={() => setPropertiesTab("buy")}
          >
            For Buy
          </button>
        </div>
        {propertiesTab === "all" && (
          <div className={styles.ic_property_slider_wrapper}>
            <Slider {...settings}>
              {properties.map((property, index) => (
                <div key={index} className={styles.ic_property_item}>
                  <Link href="#">
                    <PropertyItem propertyInfo={property} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}
        {propertiesTab === "sale" && (
          <div className={styles.ic_property_slider_wrapper}>
            <Slider {...settings}>
              {properties.map((property, index) => (
                <div key={index} className={styles.ic_property_item}>
                  <Link href="#">
                    <PropertyItem propertyInfo={property} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}
        {propertiesTab === "rent" && (
          <div className={styles.ic_property_slider_wrapper}>
            <Slider {...settings}>
              {properties.map((property, index) => (
                <div key={index} className={styles.ic_property_item}>
                  <Link href="#">
                    <PropertyItem propertyInfo={property} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}
        {propertiesTab === "buy" && (
          <div className={styles.ic_property_slider_wrapper}>
            <Slider {...settings}>
              {properties.map((property, index) => (
                <div key={index} className={styles.ic_property_item}>
                  <Link href="#">
                    <PropertyItem propertyInfo={property} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Featured;

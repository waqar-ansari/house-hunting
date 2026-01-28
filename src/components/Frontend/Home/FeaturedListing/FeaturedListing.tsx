"use client";
import PropertyItem from "@/components/Share/PropertyItem/PropertyItem";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./featured-listing.module.css";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import propertyImg4 from "@/images/property-04.png";
import propertyImg5 from "@/images/property-05.png";
import propertyImg6 from "@/images/property-06.png";
import propertyImg7 from "@/images/property-07.png";
import propertyImg8 from "@/images/property-08.png";
import avatarImg1 from "@/images/avatar-01.png";
import avatarImg2 from "@/images/avatar-02.png";
import avatarImg3 from "@/images/avatar-03.png";
import avatarImg4 from "@/images/avatar-04.png";
import avatarImg5 from "@/images/avatar-05.png";
import avatarImg6 from "@/images/avatar-06.png";
import avatarImg7 from "@/images/avatar-07.png";

import { useState } from "react";

const FeaturedListing = () => {
  //component state
  const [propertiesTab, setPropertiesTab] = useState<string>("all");
  return (
    <section className="ic_section_space">
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
          <Row
            gutter={[
              { lg: 16, md: 16, sm: 16, xs: 16 },
              { lg: 16, md: 16, sm: 16, xs: 16 },
            ]}
          >
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg1,
                    avatarImg: avatarImg1,
                    title: "Luxury Family home",
                    type: "For Rent",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg2,
                    avatarImg: avatarImg2,
                    title: "Ready home for sale",
                    type: "For sale",
                    price: 800.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg3,
                    avatarImg: avatarImg3,
                    title: "Jacks Restaurant For rent",
                    type: "For Rent",
                    price: 900.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg4,
                    avatarImg: avatarImg4,
                    title: "Luxury Office House",
                    type: "For buy",
                    price: 400.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg5,
                    avatarImg: avatarImg5,
                    title: "Highland Park Residences",
                    type: "For Rent",
                    price: 600.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg6,
                    avatarImg: avatarImg6,
                    title: "Holiday Luxury House",
                    type: "For sale",
                    price: 500.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg7,
                    avatarImg: avatarImg7,
                    title: "Modern Condo for sale",
                    type: "For Rent",
                    price: 800.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col xl={6} lg={8} md={12} sm={12} xs={24} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg8,
                    avatarImg: avatarImg1,
                    title: "Gorgeous Apartment",
                    type: "For sale",
                    price: 1000.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
          </Row>
        )}
        {propertiesTab === "sale" && (
          <Row gutter={[{ lg: 16 }, { lg: 16 }]}>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg1,
                    avatarImg: avatarImg2,
                    title: "Luxury Family home",
                    type: "For sale",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg2,
                    avatarImg: avatarImg3,
                    title: "Luxury Family home",
                    type: "For sale",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
          </Row>
        )}
        {propertiesTab === "rent" && (
          <Row gutter={[{ lg: 16 }, { lg: 16 }]}>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg2,
                    avatarImg: avatarImg1,
                    title: "Luxury Family home",
                    type: "For rent",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg3,
                    avatarImg: avatarImg2,
                    title: "Luxury Family home",
                    type: "For rent",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
          </Row>
        )}
        {propertiesTab === "buy" && (
          <Row gutter={[{ lg: 16 }, { lg: 16 }]}>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg5,
                    avatarImg: avatarImg3,
                    title: "Luxury Family home",
                    type: "For buy",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
            <Col lg={6} className="gutter-row">
              <Link href="#">
                <PropertyItem
                  propertyInfo={{
                    thumbnail: propertyImg6,
                    avatarImg: avatarImg4,
                    title: "Luxury Family home",
                    type: "For buy",
                    price: 796.59,
                    info: {
                      size: "1200",
                      beds: "2",
                      baths: "1",
                    },
                    location: "4517 Washington Ave. Manchester",
                    propertyType: "Modern House",
                  }}
                />
              </Link>
            </Col>
          </Row>
        )}
      </div>
    </section>
  );
};

export default FeaturedListing;

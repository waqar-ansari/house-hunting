"use client";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Checkbox, Col, ConfigProvider, Row, Select } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { RiRefreshLine } from "react-icons/ri";
import styles from "./listing.module.css";
import PropertyListItem from "@/components/Share/PropertyItem/PropertyListItem";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import propertyImg5 from "@/images/property-05.png";
import Pagination from "@/components/Share/Pagination/Pagination";

const ListingList = () => {
  //component state
  const [listingTab, setListingTab] = useState<string>("rent");
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/listing-breadcrumb.png",
          title: "Listing",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Listing",
              link: `/listing-list`,
            },
          ],
        }}
      />
      {/* Listing area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={`${styles.ic_listing_tab_sort_by} ic_mb_40`}>
            <div className={styles.listing_tab}>
              <button
                className={listingTab === "rent" ? styles.active : ""}
                onClick={() => setListingTab("rent")}
              >
                Rent Home
              </button>
              <button
                className={listingTab === "sale" ? styles.active : ""}
                onClick={() => setListingTab("sale")}
              >
                Sale Home
              </button>
            </div>
            <div className={styles.ic_listing_reset_sort}>
              <div className={styles.ic_list_grid_icon}>
                <Link href="/listing">
                  <BsFillGrid3X3GapFill />
                </Link>
                <Link href="/listing-list" className={styles.active}>
                  <FaListUl />
                </Link>
              </div>
              <p className={styles.ic_title_color}>12 Matches</p>
              <button className="ic_title_color">
                <RiRefreshLine />
                Reset
              </button>
              <Select
                placeholder="Sort By"
                className={`${styles.ic_sort_select} ic_form_select_global`}
                options={[
                  { value: "villa", label: "Villa" },
                  { value: "office", label: "Office" },
                  { value: "studio", label: "Studio" },
                ]}
              />
            </div>
          </div>

          <Row
            gutter={[
              { lg: 24, md: 16, sm: 16, xs: 16 },
              { lg: 24, md: 16, sm: 16, xs: 16 },
            ]}
          >
            <Col lg={17} md={24} sm={24} xs={24}>
              {listingTab === "rent" && (
                <>
                  <Row
                    gutter={[
                      { lg: 24, md: 16, sm: 16, xs: 16 },
                      { lg: 24, md: 16, sm: 16, xs: 16 },
                    ]}
                  >
                    <Col xs={24}>
                      <Link href="#">
                        <PropertyListItem
                          propertyInfo={{
                            thumbnail: propertyImg1,
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
                    <Col xs={24}>
                      <Link href="#">
                        <PropertyListItem
                          propertyInfo={{
                            thumbnail: propertyImg3,
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
                    <Col xs={24}>
                      <Link href="#">
                        <PropertyListItem
                          propertyInfo={{
                            thumbnail: propertyImg5,
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
                  </Row>
                  <Pagination />
                </>
              )}
              {listingTab === "sale" && (
                <>
                  <Row
                    gutter={[
                      { lg: 24, md: 16, sm: 16, xs: 16 },
                      { lg: 24, md: 16, sm: 16, xs: 16 },
                    ]}
                  >
                    <Col xs={24}>
                      <Link href="#">
                        <PropertyListItem
                          propertyInfo={{
                            thumbnail: propertyImg2,
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
                    <Col xs={24}>
                      <Link href="#">
                        <PropertyListItem
                          propertyInfo={{
                            thumbnail: propertyImg3,
                            title: "Jacks Restaurant For rent",
                            type: "For Sale",
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
                  </Row>
                  <Pagination />
                </>
              )}
            </Col>
            <Col lg={7} md={24} sm={24} xs={24}>
              <div className={styles.ic_property_sidebar}>
                <div className={styles.ic_property_sidebar_item}>
                  <div className="ic_mb_20">
                    <p className="ic_fw_500 ic_title_color ic_mb_5">
                      Choose Category
                    </p>
                    <Select
                      placeholder="Select Category"
                      style={{
                        width: "100%",
                        height: "45px",
                      }}
                      options={[
                        {
                          value: "home",
                          label: "Home",
                        },
                        {
                          value: "office",
                          label: "Office",
                        },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="ic_fw_500 ic_title_color ic_mb_5">
                      Choose City
                    </p>
                    <Select
                      placeholder="Select City"
                      style={{
                        width: "100%",
                        height: "45px",
                      }}
                      options={[
                        {
                          value: "Los Angeles",
                          label: "Los Angeles",
                        },
                        {
                          value: "New York",
                          label: "New York",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className={styles.ic_property_sidebar_item}>
                  <h6 className="ic_title_color">Beds</h6>
                  <ul>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>1</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>2</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>3</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>4</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>5</Checkbox>
                      </ConfigProvider>
                    </li>
                  </ul>
                </div>
                <div className={styles.ic_property_sidebar_item}>
                  <h6 className="ic_title_color">Baths</h6>
                  <ul>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>1</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>2</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>3</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>4</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>5</Checkbox>
                      </ConfigProvider>
                    </li>
                  </ul>
                </div>
                <div className={styles.ic_property_sidebar_item}>
                  <h6 className="ic_title_color">Amenities</h6>
                  <ul>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Air Conditioning</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Buil-In Wardrobes</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Clinic</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Dishwasher</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Fencing</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Floor Coverings</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Internet</Checkbox>
                      </ConfigProvider>
                    </li>
                    <li>
                      <ConfigProvider
                        theme={{ token: { colorPrimary: "#FF5A3C" } }}
                      >
                        <Checkbox>Park</Checkbox>
                      </ConfigProvider>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ListingList;

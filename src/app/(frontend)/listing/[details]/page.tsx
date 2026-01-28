import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import PropertyItem from "@/components/Share/PropertyItem/PropertyItem";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import avatarImg1 from "@/images/avatar-01.png";
import avatarImg2 from "@/images/avatar-02.png";
import avatarImg3 from "@/images/avatar-03.png";

import profileAvater from "@/images/profile-avatar.png";
import { Col, Row } from "antd";
import Link from "next/link";
import styles from "./listing-details.module.css";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMapPinLine,
  RiTwitterFill,
} from "react-icons/ri";
import ListingSlider from "@/components/Frontend/ListingDetails/ListingSlider/ListingSlider";
import ListingDetails from "@/components/Frontend/ListingDetails/ListingDetails/ListingDetails";
import ListingReview from "@/components/Frontend/ListingDetails/ListingReview/ListingReview";

const ListingDetailsPage = async ({
  params,
}: {
  params: Promise<{ details: string }>;
}) => {
  //get slug
  const details = (await params).details;
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/listing-details-breadcrumb.png",
          title: "Listing Details",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Listing",
              link: `/listing`,
            },
            {
              label: "Listing Details",
              link: `/listing/${details}`,
            },
          ],
        }}
      />
      {/* Listing details area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            gutter={[
              { lg: 24, md: 20, sm: 20, xs: 20 },
              { lg: 24, md: 20, sm: 20, xs: 20 },
            ]}
          >
            <Col xl={17} lg={24}>
              <ListingSlider />
              <ListingDetails />
              <ListingReview />
              <div>
                <h4 className="ic_title_color ic_mb_30">Similar Listings</h4>
                <Row
                  gutter={[
                    { lg: 16, md: 16, sm: 16, xs: 16 },
                    { lg: 16, md: 16, sm: 16, xs: 16 },
                  ]}
                >
                  <Col lg={8} md={12} sm={12} xs={24} className="gutter-row">
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
                  <Col lg={8} md={12} sm={12} xs={24} className="gutter-row">
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
                  <Col lg={8} md={12} sm={12} xs={24} className="gutter-row">
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
                </Row>
              </div>
            </Col>
            <Col xl={7} lg={24}>
              <div className={styles.ic_listing_right}>
                <div className={styles.ic_listing_owner}>
                  <h5 className="h5_2 ic_title_color ic_mb_20">
                    Contact Listing Owner
                  </h5>
                  <div
                    className={`${styles.ic_owner_profile_social_info} ic_mb_15`}
                  >
                    <div className={styles.ic_profile_img}>
                      <Image src={profileAvater} alt="user" />
                    </div>
                    <div className={styles.ic_social_info}>
                      <p className="ic_title_color ic_fw_500">Esther Howard</p>
                      <p className="ic_primary_color ic_mb_10">View Website</p>
                      <ul>
                        <li>
                          <Link href="#">
                            <RiFacebookFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <RiTwitterFill />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <RiInstagramLine />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <RiLinkedinFill />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.ic_details_info}>
                    <p className="body_s ic_body_color">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem site be doloremque laudantium.
                    </p>
                  </div>
                </div>
                <div className={styles.ic_latest_listing}>
                  <h4 className="ic_title_color ic_mb_25">Latest Listings</h4>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg1} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg2} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                  <div className={styles.ic_latest_listing_item}>
                    <div className={styles.ic_latest_listing_thumb}>
                      <Image src={propertyImg3} alt="property" />
                    </div>
                    <div className={styles.ic_latest_listing_content}>
                      <h6>Ready Home</h6>
                      <p className="ic_secondary_color body_s ">
                        <RiMapPinLine />
                        4517 Washington
                      </p>
                      <p className="body_s ic_fw_500 ic_primary_color">
                        $750.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ListingDetailsPage;

import AgencyDetailsTab from "@/components/Frontend/AgencyDetailsTab/AgencyDetailsTab";
import ListingReview from "@/components/Frontend/ListingDetails/ListingReview/ListingReview";
import AgentItem from "@/components/Share/AgentItem/AgentItem";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import PropertyListItem from "@/components/Share/PropertyItem/PropertyListItem";
import agencyProfile from "@/images/agency-profile.png";
import coverImg from "@/images/agency_cover.png";
import agentImg1 from "@/images/agent-01.png";
import agentImg2 from "@/images/agent-02.png";
import agentImg3 from "@/images/agent-03.png";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import { Col, Row } from "antd";
import Image from "next/image";
import { RiMapPinLine } from "react-icons/ri";
import styles from "./agency-details.module.css";

const AgencyDetailsPage = async ({
  params,
}: {
  params: Promise<{ details: string }>;
}) => {
  const details = (await params).details;

  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/agency-details-breadcrumb.png",
          title: "Agency Details",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Agency Details",
              link: "/agency/details",
            },
          ],
        }}
      />
      {/* Agency details area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            gutter={[
              { lg: 24, md: 20, sm: 20, xs: 20 },
              { lg: 24, md: 20, sm: 20, xs: 20 },
            ]}
          >
            <Col xl={16} xxl={18} lg={24}>
              <div className={`${styles.ic_agency_details_top} ic_mb_40`}>
                <div className={styles.ic_agency_cover}>
                  <div className={styles.ic_cover_img}>
                    <Image src={coverImg} alt="cover" />
                  </div>
                  <div className={styles.ic_agency_cover_wrapper}>
                    <div className={`${styles.ic_profile_info_img} ic_mb_40`}>
                      <div className={styles.ic_profile}>
                        <Image src={agencyProfile} alt="profile" />
                      </div>
                      <div className={styles.ic_info}>
                        <h5 className="ic_fw_600 ic_title_color ic_mb_5">
                          Real Estate Company Slogan
                        </h5>
                        <p className="body_s ic_title_color">
                          Company Agent at{" "}
                          <span className="ic_primary_color">
                            All American Real Estate
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.ic_agency_contact_info}>
                      <div className={styles.ic_title}>
                        <h5 className="ic_title_color ic_fw_600">
                          Contact Information
                        </h5>
                      </div>
                      <div className={styles.ic_contact_info_box}>
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Listing:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            6.236
                          </p>
                        </div>
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Hotline:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            789-5498-265
                          </p>
                        </div>
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Phone:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            123-5698-2658
                          </p>
                        </div>
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Fax:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            +78-5698-458
                          </p>
                        </div>
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Email:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            Sloganestate@gmail.com
                          </p>
                        </div>{" "}
                        <div className={styles.ic_contact_info_item}>
                          <p className="ic_title_color ic_fw_600">Address:</p>
                          <p className="ic_title_color body_s ic_fw_500">
                            4517 Washington Ave. Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ic_agency_details}>
                <AgencyDetailsTab />
                {(details === "description" || details === undefined) && (
                  <div className={styles.ic_details_details}>
                    <h6>Real Estate Company Slogan</h6>
                    <p>
                      A real estate company typically engages in the business of
                      buying, selling, renting, or managing properties, which
                      can include residential, commercial, industrial, and
                      agricultural real estate. These companies may focus on
                      various services within the real estate sector, such as:
                    </p>
                    <p>
                      <strong>Residential Brokerage: </strong> Assists clients
                      in buying and selling homes. Agents help clients find
                      suitable properties, negotiate offers, and complete
                      transactions.
                    </p>
                    <p>
                      <strong>Commercial Brokerage:</strong> Focuses on
                      commercial properties like office buildings, retail
                      spaces, or industrial complexes. Agents help with leasing,
                      purchasing, or selling these properties.
                    </p>
                    <p>
                      <strong>Luxury Brokerage:</strong> Specializes in
                      high-end, luxury properties, catering to affluent clients.
                    </p>
                  </div>
                )}
                {details === "listing" && (
                  <Row
                    gutter={[
                      { xs: 24, sm: 24, md: 24, lg: 24 },
                      { xs: 24, sm: 24, md: 24, lg: 24 },
                    ]}
                  >
                    <Col xs={24}>
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
                    </Col>
                    <Col xs={24}>
                      <PropertyListItem
                        propertyInfo={{
                          thumbnail: propertyImg2,
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
                    </Col>
                    <Col xs={24}>
                      <PropertyListItem
                        propertyInfo={{
                          thumbnail: propertyImg3,
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
                    </Col>
                  </Row>
                )}
                {details === "agents" && (
                  <Row
                    gutter={[
                      { xs: 24, sm: 24, md: 24, lg: 24 },
                      { xs: 24, sm: 24, md: 24, lg: 24 },
                    ]}
                  >
                    <Col xs={24} sm={8} md={8} lg={8}>
                      <AgentItem
                        agentInfo={{
                          id: 1,
                          thumbnail: agentImg1,
                          title: "Dentista Aguilda",
                          designation: "Selling Agent",
                        }}
                      />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8}>
                      <AgentItem
                        agentInfo={{
                          id: 2,
                          thumbnail: agentImg2,
                          title: "Kelemen Krisztina",
                          designation: "Real Estate Agent",
                        }}
                      />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8}>
                      <AgentItem
                        agentInfo={{
                          id: 3,
                          thumbnail: agentImg3,
                          title: "Szekeres Dalma",
                          designation: "Real Estate Broker",
                        }}
                      />
                    </Col>
                  </Row>
                )}
                {details === "reviews" && <ListingReview />}
              </div>
            </Col>
            <Col xl={8} xxl={6} lg={24} md={24} sm={24} xs={24}>
              <div className={`${styles.ic_agent_right} ic_mb_20`}>
                <div className={styles.ic_agent_search}>
                  <h4 className="ic_title_color ic_mb_25">
                    Contact with Agent
                  </h4>
                  <div className={styles.ic_agent_search_input}>
                    <form action="#">
                      <div className={styles.ic_item}>
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className={styles.ic_item}>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className={styles.ic_item}>
                        <input type="phone" placeholder="Phone" />
                      </div>
                      <div className={styles.ic_item}>
                        <textarea placeholder="Message"></textarea>
                      </div>
                      <button className="ic_btn ic_btn_lg">Submit Now</button>
                    </form>
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

export default AgencyDetailsPage;

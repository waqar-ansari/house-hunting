import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import styles from "./add-listing.module.css";
import { Col, Row } from "antd";
import Link from "next/link";
import addListingImg1 from "@/images/add-listing-01.png";
import addListingImg2 from "@/images/add-listing-02.png";
import Image from "next/image";

const AddListingPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/add-listing-breadcrumb.png",
          title: "Add Listing",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Add Listing",
              link: "/add-listing",
            },
          ],
        }}
      />
      {/* Add Listing area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={styles.ic_add_listing_wrapper}>
            <Row
              gutter={[
                { lg: 24, md: 20, sm: 20, xs: 20 },
                { lg: 24, md: 20, sm: 20, xs: 20 },
              ]}
            >
              <Col lg={12} md={12} sm={24} xs={24}>
                <div className={styles.ic_add_listing_item}>
                  <div className="ic_mb_20">
                    <Image src={addListingImg1} alt="processImg" />
                  </div>
                  <div className={styles.ic_content}>
                    <h4 className="ic_title_color ic_mb_16">For - Rent</h4>
                    <p className="body_s ic_body_color ic_mb_20">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </p>
                    <Link
                      href="/dashboard/create-listing"
                      className="ic_btn ic_btn_md ic_btn_md_outline"
                    >
                      Create Listing
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <div className={styles.ic_add_listing_item}>
                  <div className="ic_mb_20">
                    <Image src={addListingImg2} alt="processImg" />
                  </div>
                  <div className={styles.ic_content}>
                    <h4 className="ic_title_color ic_mb_16">For - Sale</h4>
                    <p className="body_s ic_body_color ic_mb_20">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </p>
                    <Link
                      href="/dashboard/create-listing"
                      className="ic_btn ic_btn_md ic_btn_md_outline"
                    >
                      Create Listing
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddListingPage;

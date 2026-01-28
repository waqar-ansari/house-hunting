import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import property01 from "@/images/property-01.png";
import property02 from "@/images/property-02.png";
import property03 from "@/images/property-03.png";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdCheckCircleOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./compare.module.css";

const ComparePage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/compare-breadcrumb.png",
          title: "Compare Properties",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Compare Properties",
              link: "/compare",
            },
          ],
        }}
      />
      {/* Compare area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={styles.ic_compare_wrapper}>
            <table>
              <thead>
                <tr>
                  <th>
                    <h5 className="ic_fw_700 ic_mb_10 nowrap">
                      Properties Comparison
                    </h5>
                    <p className="ic_body_color">
                      Find and select Properties to see the differences and
                      similarities between them
                    </p>
                  </th>
                  <th>
                    <div className={styles.ic_property_img_icon}>
                      <Image
                        src={property01}
                        width={250}
                        height={160}
                        alt="property"
                      />
                      <button>
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <div className={styles.ic_property_content}>
                      <h6 className="ic_fw_600 ic_title_color">
                        Holiday Luxury House
                      </h6>
                      <p className="body_s ic_title_color">For Sale</p>
                      <p className="ic_fw_600 ic_primary_color">$7,500</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.ic_property_img_icon}>
                      <Image
                        src={property02}
                        width={250}
                        height={160}
                        alt="property"
                      />
                      <button>
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <div className={styles.ic_property_content}>
                      <h6 className="ic_fw_600 ic_title_color">
                        Holiday Luxury House
                      </h6>
                      <p className="body_s ic_title_color">For Sale</p>
                      <p className="ic_fw_600 ic_primary_color">$7,500</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.ic_property_img_icon}>
                      <Image
                        src={property03}
                        width={250}
                        height={160}
                        alt="property"
                      />
                      <button>
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <div className={styles.ic_property_content}>
                      <h6 className="ic_fw_600 ic_title_color">
                        Holiday Luxury House
                      </h6>
                      <p className="body_s ic_title_color">For Sale</p>
                      <p className="ic_fw_600 ic_primary_color">$7,500</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>Villa</td>
                  <td>Apartments</td>
                  <td>Single Family</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>New York</td>
                  <td>New York</td>
                  <td>New York</td>
                </tr>
                <tr>
                  <td>Lot Size</td>
                  <td>4800 sq ft</td>
                  <td>5600 sq ft</td>
                  <td>5400 sq ft</td>
                </tr>
                <tr>
                  <td>Property Size</td>
                  <td>3500 sq ft</td>
                  <td>4800 sq ft</td>
                  <td>3200 sq ft</td>
                </tr>
                <tr>
                  <td>Year Built</td>
                  <td>2024</td>
                  <td>2023</td>
                  <td>2022</td>
                </tr>
                <tr>
                  <td>Bedrooms</td>
                  <td>03</td>
                  <td>02</td>
                  <td>04</td>
                </tr>
                <tr>
                  <td>Bathrooms</td>
                  <td>03</td>
                  <td>02</td>
                  <td>04</td>
                </tr>
                <tr>
                  <td>Garages</td>
                  <td>03</td>
                  <td>02</td>
                  <td>04</td>
                </tr>
                <tr>
                  <td>2 Stories</td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_remove}>
                    <AiOutlineCloseCircle />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                </tr>
                <tr>
                  <td>Bike Path</td>
                  <td className={styles.ic_remove}>
                    <AiOutlineCloseCircle />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                </tr>
                <tr>
                  <td>Central Cooling</td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                </tr>
                <tr>
                  <td>Refrigerator</td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                  <td className={styles.ic_check}>
                    <MdCheckCircleOutline />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparePage;

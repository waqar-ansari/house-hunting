import avatarImg from "@/images/avater.png";
import { Col, Row } from "antd";
import Image, { StaticImageData } from "next/image";
import { FiMapPin } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./property-listing-list.module.css";

interface PropertyInfo {
  thumbnail: StaticImageData;
  title: string;
  type: string;
  price: number;
  isFavorite?: boolean;
  info: {
    size: string;
    beds: string;
    baths: string;
  };
  location: string;
  propertyType: string;
}

const PropertyListItem = ({ propertyInfo }: { propertyInfo: PropertyInfo }) => {
  const {
    thumbnail,
    title,
    type,
    price,
    info,
    location,
    propertyType,
    isFavorite,
  } = propertyInfo;
  return (
    <div className={styles.ic_property_item}>
      <Row
        gutter={[
          { lg: 30, md: 20, sm: 20, xs: 20 },
          { lg: 30, md: 20, sm: 20, xs: 20 },
        ]}
      >
        <Col lg={10} md={10} sm={24} xs={24}>
          <div className={styles.ic_property_thumbnail}>
            <Image src={thumbnail} alt="property" />
            <div className={styles.ic_property_favorite}>
              <button>
                <IoMdHeart />
              </button>
            </div>
          </div>
        </Col>
        <Col lg={14} md={14} sm={24} xs={24}>
          <div className={`${styles.ic_property_info} ic_property_info`}>
            <div className={`${styles.ic_price_type} ic_price_type`}>
              <div className={`${styles.ic_left} ic_left`}>
                <h6 className="ic_primary_color">${price}</h6>
                <span
                  className={`${styles.ic_property_type} body_s ic_property_type`}
                >
                  {type}
                </span>
              </div>
              {isFavorite && (
                <button className={styles.ic_delete_btn}>
                  <RiDeleteBinLine />
                </button>
              )}
            </div>
            <div className={styles.ic_property_title}>
              <h5 className="h5_2 ic_fw_600 ic_title_color">{title}</h5>
              <p className="body_s ic_fw_500 ic_secondary_color">
                {propertyType}
              </p>
            </div>
            <div className={styles.ic_info}>
              <p className="body_s ic_title_color">{info.size} Sqft</p>
              <p className="body_s ic_title_color">{info.beds} Beds</p>
              <p className="body_s ic_title_color">1{info.baths}Baths</p>
            </div>
            <div className={`${styles.ic_location} ic_location`}>
              <p className="body_s ic_title_color">
                <FiMapPin />
                {location}
              </p>
              <div className={styles.ic_property_type_author}>
                <Image src={avatarImg} alt="avatar" width={40} height={40} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyListItem;

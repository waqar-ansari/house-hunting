import Image, { StaticImageData } from "next/image";
import styles from "./property-item.module.css";
import { IoMdHeart } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

interface PropertyInfo {
  thumbnail: StaticImageData;
  avatarImg: StaticImageData;
  title: string;
  type: string;
  price: number;
  info: {
    size: string;
    beds: string;
    baths: string;
  };
  location: string;
  propertyType: string;
}

const PropertyItem = ({ propertyInfo }: { propertyInfo: PropertyInfo }) => {
  const {
    thumbnail,
    avatarImg,
    title,
    type,
    price,
    info,
    location,
    propertyType,
  } = propertyInfo;
  return (
    <div className={styles.ic_property_item}>
      <div className={styles.ic_property_top}>
        <div className={styles.ic_property_thumbnail}>
          <Image src={thumbnail} alt="property" />
        </div>
        <div className={styles.ic_property_type_author}>
          <span className={`${styles.ic_property_type} body_s`}>{type}</span>
          <Image src={avatarImg} alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div className={styles.ic_property_info}>
        <div className={styles.ic_property_favorite}>
          <button>
            <IoMdHeart />
          </button>
        </div>
        <div className={styles.ic_price_title}>
          <h6 className="ic_primary_color">${price}</h6>
          <h5 className="h5_2 ic_fw_600 ic_title_color">{title}</h5>
          <p className="body_s ic_fw_500 ic_secondary_color">{propertyType}</p>
        </div>
        <div className={styles.ic_info}>
          <p className="body_s ic_title_color">{info.size} Sqft</p>
          <p className="body_s ic_title_color">{info.beds} Beds</p>
          <p className="body_s ic_title_color">1{info.baths}Baths</p>
        </div>
        <div className={styles.ic_location}>
          <p className="body_s ic_title_color">
            <FiMapPin />
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;

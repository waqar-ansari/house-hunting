import Image, { StaticImageData } from "next/image";
import styles from "./agent.module.css";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

//defined props type

interface AgentInfo {
  id: number;
  thumbnail: StaticImageData;
  title: string;
  designation: string;
}

const AgentItem = ({ agentInfo }: { agentInfo: AgentInfo }) => {
  const { id, thumbnail, title, designation } = agentInfo;

  return (
    <div className={styles.ic_agent_item}>
      <div className={styles.ic_thumbnail_social}>
        <div className={styles.ic_thumb}>
          <Link href={`/agent/${id}`}>
            <Image src={thumbnail} className="ic_img_fluid" alt="agent" />
          </Link>
        </div>
        <div className={styles.ic_social}>
          <button className={styles.ic_plus_icon}>
            <span>
              <BiPlus />
            </span>
          </button>
          <ul>
            <li>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.ic_content}>
        <h5>
          <Link href={`/agent/${id}`} className="ic_fw_600 ic_title_color h5">
            {title}
          </Link>
        </h5>
        <Link href={`/agent/${id}`} className="ic_secondary_color">
          {designation}
        </Link>
      </div>
    </div>
  );
};

export default AgentItem;

import Link from "next/link";
import styles from "./articalesitem.module.css";
import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface ArticlesInfo {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  author: string;
}

const ArticlesItem = ({ articlesInfo }: { articlesInfo: ArticlesInfo }) => {
  const { id, thumbnail, title, author } = articlesInfo;
  return (
    <div className={styles.ic_blog_item}>
      <div className={styles.ic_thumbnail}>
        <Link href={`/blog/${id}`}>
          <Image src={thumbnail} alt="blog" />
        </Link>
      </div>
      <div className={styles.ic_content}>
        <div className={`${styles.ic_author_date} ic_mb_16`}>
          <p className="body_s ic_title_color">{author}</p>
        </div>
        <div className={`ic_mb_30 ${styles.ic_articles_header}`}>
          <h5 className={`ic_fw_600 ic_title_color ic_mb_35`}>
            <Link href={`/blog/${id}`} className="ic_fw_600 ic_title_color h5">
              {title}
            </Link>
          </h5>
        </div>
        <Link
          href={`/blog/${id}`}
          className={`ic_btn ic_btn_sm  ${styles.ic_read_more_btn}`}
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ArticlesItem;

import Link from "next/link";
import styles from "./blog-item.module.css";
import Image, { StaticImageData } from "next/image";
import { LuCalendarDays, LuUser } from "react-icons/lu";

interface BlogInfo {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  description: string;
  author: string;
  date: string;
}

const BlogItem = ({ blogInfo }: { blogInfo: BlogInfo }) => {
  const { id, thumbnail, title, description, author, date } = blogInfo;
  return (
    <div className={styles.ic_blog_item}>
      <div className={styles.ic_thumbnail}>
        <Link href={`/blog/${id}`}>
          <Image src={thumbnail} alt="blog" />
        </Link>
      </div>
      <div className={styles.ic_content}>
        <div className={`${styles.ic_author_date} ic_mb_16`}>
          <p className="body_s ic_title_color">
            <LuUser />
            {author}
          </p>
          <p className="body_s ic_title_color">
            <LuCalendarDays />
            {date}
          </p>
        </div>
        <h5 className="ic_fw_600 ic_title_color ic_mb_10">
          <Link href={`/blog/${id}`} className="ic_fw_600 ic_title_color h5">
            {title}
          </Link>
        </h5>
        <p className="ic_mb_16">
          <Link href={`/blog/${id}`} className="ic_body_color">
            {description}
          </Link>
        </p>
        <Link
          href={`/blog/${id}`}
          className={`ic_btn ic_btn_sm ic_btn_md_outline ${styles.ic_read_more_btn}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

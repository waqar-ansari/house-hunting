import styles from "./page-breadcrumb.module.css";
import Link from "next/link";

//defined props types

interface BreadcrumbInfo {
  backgroundImg: string;
  title: string;
  navItem: {
    label: string;
    link: string;
  }[];
}
const PageBreadcrumb = ({
  breadcrumbInfo,
}: {
  breadcrumbInfo: BreadcrumbInfo;
}) => {
  const { backgroundImg, title, navItem } = breadcrumbInfo;

  return (
    <div
      className={styles.ic_page_breadcrumb_wrap}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="ic_container">
        <div className={styles.ic_breadcrumb_title}>
          <h2 className="ic_white_color">{title}</h2>
        </div>
        <div className={styles.ic_breadcrumb_nav}>
          <ul>
            {navItem?.map((item, index) => (
              <>
                <li key={index}>
                  <Link href={item?.link}>{item?.label}</Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.87852 9L6.16602 5.2875L7.22652 4.227L11.9995 9L7.22652 13.773L6.16602 12.7125L9.87852 9Z"
                      fill="white"
                    />
                  </svg>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiComment } from "react-icons/bi";
import { FiBriefcase, FiFilePlus, FiHeart, FiUser } from "react-icons/fi";

import {
  MdLogout,
  MdOutlineHome,
  MdOutlineMailOutline,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import styles from "./sidebar.module.css";

interface SidebarProps {
  isCollapse: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isCollapse }) => {
  //get pathname
  const pathname = usePathname();
  return (
    <div
      className={`${styles.ic_sidebar_wrapper} ${
        isCollapse ? styles.ic_collapsed : ""
      }`}
    >
      <div className={styles.logo}>
        <Link href="/dashboard">
          <Image
            src="/logo/logo.png"
            alt="RealtyClan"
            width={180}
            height={40}
          />
        </Link>
      </div>
      <div className={styles.ic_nav_item_wrap}>
        <ul>
          <li>
            <Link
              href="/dashboard"
              className={pathname === "/dashboard" ? styles.active : ""}
            >
              <MdOutlineHome />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/message"
              className={pathname === "/dashboard/message" ? styles.active : ""}
            >
              <MdOutlineMailOutline />
              <span>Message</span>
            </Link>
            <Link
              href="/dashboard/create-listing"
              className={
                pathname === "/dashboard/create-listing" ? styles.active : ""
              }
            >
              <FiFilePlus />
              <span>Create Listing</span>
            </Link>
            <Link
              href="/dashboard/my-properties"
              className={
                pathname === "/dashboard/my-properties" ? styles.active : ""
              }
            >
              <MdOutlineMapsHomeWork />
              <span>My Properties</span>
            </Link>
            <Link
              href="/dashboard/my-favorite"
              className={
                pathname === "/dashboard/my-favorite" ? styles.active : ""
              }
            >
              <FiHeart />
              <span>My Favorites</span>
            </Link>
            <Link
              href="/dashboard/reviews"
              className={pathname === "/dashboard/reviews" ? styles.active : ""}
            >
              <BiComment />
              <span>Reviews</span>
            </Link>
            <Link
              href="/dashboard/my-package"
              className={
                pathname === "/dashboard/my-package" ? styles.active : ""
              }
            >
              <FiBriefcase />
              <span>My Package</span>
            </Link>
            <Link
              href="/dashboard/my-profile"
              className={
                pathname === "/dashboard/my-profile" ? styles.active : ""
              }
            >
              <FiUser />
              <span>Profile</span>
            </Link>
            <Link href="#">
              <MdLogout />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

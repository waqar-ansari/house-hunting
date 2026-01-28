"use client";
import { usePathname } from "next/navigation";
import Header1 from "./Header1";
import Header2 from "./Header2";

const Header = () => {
  //get path
  const pathname = usePathname();

  return <>{pathname === "/" ? <Header1 /> : <Header2 />}</>;
};

export default Header;

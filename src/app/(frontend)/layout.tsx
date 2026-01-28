import Footer from "@/components/Layout/Frontend/Footer/Footer";
import Header from "@/components/Layout/Frontend/Header/Header";
import React from "react";

const FrontendLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* Header */}
      <Header />
      {children}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default FrontendLayout;

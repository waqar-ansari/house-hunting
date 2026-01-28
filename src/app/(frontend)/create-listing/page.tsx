import CreateListingForm from "@/components/Frontend/CreateListingForm/CreateListingForm";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import React from "react";

const CreateListingPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/create-listing-breadcrumb.png",
          title: "Create Listing",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Create Listing",
              link: `/create-listing`,
            },
          ],
        }}
      />
      {/* Create listing area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <CreateListingForm />
        </div>
      </section>
    </>
  );
};

export default CreateListingPage;

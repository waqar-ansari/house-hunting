import NotFound from "@/components/NotFound/NotFound";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";

const ErrorPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/not-found-breadcrumb.png",
          title: "Page Not Found",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Error 404",
              link: "/not-found",
            },
          ],
        }}
      />
      {/* Not Found area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <NotFound />
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

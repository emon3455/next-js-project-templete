import React from "react";

export const metadata = {
  title: "Student Dashboard | Fabrilife",
  description:
    "The Dashboar Page of the Fabrilife Website.",
};

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main className="container mx-auto ">
      {/* --------------------------- top menu --------------------------- */}

      {/* <TopMenu />

      <section className="flex gap-1">
        <aside className="overflow-y-auto">
          <SideNav sideNavLink={sideNavLink} />
        </aside>

        <aside className="flex-1 bg-base-200 w-full overflow-y-auto">
          <div
            className="
            h-[calc(100vh-4.3rem)] 
             
          "
          >
            {children}
          </div>
        </aside>
      </section> */}
      {children}
    </main>
  );
};

export default DashboardLayout;
import React from "react";

const CCard = ({
  children,
  title,
  secondary,
}: React.PropsWithChildren<{
  title?: React.ReactNode;
  secondary?: React.ReactNode;
}>) => {
  return (
    <main className="shadow rounded-md bg-white p-4 mb-4">
      {(title || secondary) && (
        <>
          <section className="flex justify-between items-center">
            <aside>
              {title && (
                <h2 className="text-left md:text-base text-xs md:mb-4 mb-2 font-semibold">
                  {title}
                </h2>
              )}
            </aside>
            <div>{secondary && secondary}</div>
          </section>
          <hr className="mb-3 mt-1" />
        </>
      )}
      {children && children}
    </main>
  );
};

export default CCard;

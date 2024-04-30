import Link from "next/link";
import React from "react";

const CLinkButton = ({
  href,
  children,
  target = "_self",
  query,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  query?: any;
}) => {
  return (
    <>
      <Link
        href={{
          pathname: href,
          ...(query && { query }),
        }}
        className="text-xs md:text-sm text-light-primary border-2 border-light-primary rounded px-2 py-1 hover:bg-light-primary hover:text-blue-600 transition-all duration-300"
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
      >
        {children}
      </Link>
    </>
  );
};

export default CLinkButton;

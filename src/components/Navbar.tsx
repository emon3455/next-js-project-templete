"use client";
import React, { useEffect, useState } from "react";
import cToastify from "@/shared/Toastify/Toadtify";
import { usePathname } from "next/navigation";
import Link from "next/link";
import getUser from "@/hooks/useAuth";
import { removeDataInCookies } from "@/Global/(cockies)/setCoockies";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const path = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user?.id]);

  const handleLogout = async () => {
    try {
      removeDataInCookies();
      if (path.includes("/admin") || path.includes("/customer")) {
        window.location.href=`/login?redirectUrl=${path}`;
      }else{
        window.location.href=`${path}`;
      }
      cToastify({
        type: "success",
        message: "Successfully Log out done",
      });
    } catch (error) {
      cToastify({
        type: "error",
        message: "Something Went wrong Try again!!",
      });
    }
  };

  return (
    <nav className="flex justify-between p-4 bg-cyan-950 text-white">
      <h2 className="">navbar</h2>
      <div className="flex space-x-2">
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/customer">Customer</Link>
        <Link href="/test">Test</Link>
        {
          user?.role 
          ? 
          <p onClick={handleLogout}>{"Logout"}</p> 
          : 
          <Link href="/login">{"Login"}</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;

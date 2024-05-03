"use client";
import { useLoginMutation } from "@/Redux/Features/auth/Auth-api-slice";
import CButton from "@/utils/CButton/CButton";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { errorAlert } from "@/utils/alert-function";
import cToastify from "@/shared/Toastify/Toadtify";
import Loading from "@/app/loading";

const LoginForm = () => {
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";

  //login mutation
  const [
    login,
    { isLoading, isSuccess, data: LoginData, isError, error: loginError },
  ] = useLoginMutation();

  //showing success message
  useEffect(() => {
    if (isSuccess) {
      cToastify({
        type: "success",
        message: "Login Successful",
      });

      const value = JSON.stringify(LoginData);
      document.cookie = `authToken=${value}; max-age=86400;`;

      if (LoginData?.user?.role === "ADMIN") {
        window.location.href = "/admin";
      } else if (LoginData?.user?.role === "CUSTOMER") {
        window.location.href = "/customer";
      } else {
        window.location.href = from;
      }
    }
  }, [LoginData, from, isSuccess]);

  //showing error message
  useEffect(() => {
    if (isError) {
      // Email is not verified. Please verify your email
      if (loginError?.status === 403) {
        cToastify({
          type: "warn",
          message:
            "Something went wrong",
        });
      } else {
        errorAlert({
          text: loginError?.data?.message,
        });
      }
    }
  }, [isError, loginError]);

  //handling form submit
  const handleLogin = async () => {
    const user = {
      userName: "emon3455",
      password: "123@Ea",
    };

    try {
      await login(user)?.unwrap();
    } catch (err: any) {
      errorAlert({
        text: err?.data?.error || "Something Went wrong",
      });
      console.log(err);
    }
  };

  if(isLoading) return <Loading />

  return (
    <main>
      <CButton variant="solid" type="submit" onClick={handleLogin}>
        Login
      </CButton>
    </main>
  );
};

export default LoginForm;

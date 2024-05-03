"use server";
import { cookies } from "next/headers";
interface GetCallProps {
  data: any;
  name?: string;
  expire?: any;
}

export const saveDataInCookies = async ({
  data,
  name = "authToken",
  expire = new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
}: GetCallProps) => {
  cookies().set({
    name: name,
    value: JSON.stringify({
      accessToken: data.access,
      refreshToken: data.refresh,
      ...data,
    }),
    httpOnly: true,
    path: "/",
    expires: expire,
  });
  return data;
};

export const removeDataInCookies = async (name = "authToken") => {
  cookies().set({
    name: name,
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
};

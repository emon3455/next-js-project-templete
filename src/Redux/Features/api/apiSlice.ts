import { getTokenCookies } from "@/Global/(cockies)/getCoockies";
import { apiURL } from "@/base/apiURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiURL,
    mode: "cors",

    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = await getTokenCookies();
      // console.log(token);
      if (token) {
        headers.set("Authorization", `${token.accessToken}`);
      }
      // Access-Control-Allow-Origin
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }) as any,
  refetchOnReconnect: true,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

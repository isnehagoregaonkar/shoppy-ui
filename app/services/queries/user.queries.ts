"use client";

import axiosClient from "@/app/services/http.client";

export const USER_MUTATIONS = {
  createUser: async (data: any) => {
    const response = await axiosClient.post("/users", data);
    return response.data;
  },
};

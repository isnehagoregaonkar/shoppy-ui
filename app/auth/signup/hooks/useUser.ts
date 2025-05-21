import { ESortOrder } from "@/app/constants/enums";
import { USER_MUTATIONS } from "@/app/services/queries/user.queries";
import { IPaginatedApiParamsBase } from "@/app/types/common.types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const INITIAL_API_PARAMS: IPaginatedApiParamsBase = {
  page: 1,
  limit: 10,
  sort: ESortOrder.ASC,
  sortBy: "createdAt",
};

export const useUsers = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [apiParams, setApiParams] = useState<IPaginatedApiParamsBase>();
  const createUserMutation = useMutation({
    mutationFn: (data: any) => USER_MUTATIONS.createUser(data),
    onSuccess: (data) => {
      form.reset();
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  const onSubmit = form.handleSubmit((data: any) => {
    createUserMutation.mutate(data);
  });

  return {
    ...form,
    apiParams,
    setApiParams,
    onSubmit,
    isSubmitting: createUserMutation.isPending,
    isSuccess: createUserMutation.isSuccess,
    isError: createUserMutation.isError,
    error: createUserMutation.error,
  };
};

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
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success" as "error" | "success" | "warning" | "info",
  });
  const handleClose = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };
  const createUserMutation = useMutation({
    mutationFn: (data: any) => USER_MUTATIONS.createUser(data),
    onSuccess: () => {
      setAlert({
        open: true,
        message: "User created successfully!",
        severity: "success",
      });
      form.reset();
    },
    onError: (error: any) => {
      console.error(
        "Error creating user data msg:",
        error?.response?.data?.message[0]
      );
      setAlert({
        open: true,
        message:
          error?.response?.data?.message[0] ||
          error?.message ||
          "Failed to create user!",
        severity: "error",
      });
      console.error("Error creating user:", error);
    },
  });

  const onSubmit = form.handleSubmit((data: any) => {
    createUserMutation.mutate(data);
  });

  return {
    ...form,
    onSubmit,
    isSubmitting: createUserMutation.isPending,
    isSuccess: createUserMutation.isSuccess,
    isError: createUserMutation.isError,
    error: createUserMutation.error,
    alert,
    handleClose,
  };
};

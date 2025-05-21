"use client";

import { Box, Button, Link, Stack } from "@mui/material";

import { ControlledTextField } from "@/app/components/ui/ControlledTextField";
import NextLink from "next/link";
import { useUsers } from "./hooks/useUser";

const SignUp = () => {
  const { onSubmit, isSubmitting, control } = useUsers();
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Stack spacing={2} className="w-full max-w-xs">
        <ControlledTextField
          name="name"
          control={control}
          label="Name"
          fullWidth
          margin="normal"
        />

        <ControlledTextField
          name="email"
          control={control}
          label="Email"
          fullWidth
          margin="normal"
          type="email"
        />
        <ControlledTextField
          name="password"
          control={control}
          label="Password"
          fullWidth
          margin="normal"
          type="password"
        />

        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center">
          Login
        </Link>
      </Stack>
    </Box>
  );
};

export default SignUp;

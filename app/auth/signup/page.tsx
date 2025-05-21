"use client";

import { Alert, Box, Button, Link, Snackbar, Stack } from "@mui/material";

import { ControlledTextField } from "@/app/components/ui/ControlledTextField";
import NextLink from "next/link";
import { useUsers } from "./hooks/useUser";

const SignUp = () => {
  const { onSubmit, isSubmitting, control, alert, handleClose } = useUsers();
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      className="w-full"
      display="flex"
      justifyContent="center"
    >
      <Stack spacing={2} className="w-full max-w-xs" justifyContent="center">
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

      {/* Snackbar and Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          className="capitalize"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;

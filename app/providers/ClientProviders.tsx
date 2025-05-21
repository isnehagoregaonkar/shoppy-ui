"use client";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import darkTheme from "../dark.theme";
import queryClient from "../services/queries/query.client";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container>{children}</Container>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}

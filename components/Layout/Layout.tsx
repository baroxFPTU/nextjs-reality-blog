import { Box } from "@chakra-ui/react";

import Header from "components/Common/Header";
import { Navbar } from "components/Common/Navbar";
import type { ReactElement } from "react";

export interface LayoutProps {
  children: React.ReactNode;
  type: string;
}

export default function Layout({ children, type }: LayoutProps): ReactElement {
  if (type == "main") {
    return (
      <Box h="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flexGrow={1}>{children}</Box>
        <Navbar />
      </Box>
    );
  }

  return (
    <>
      <h1>This is main layout</h1>
      {children}
    </>
  );
}

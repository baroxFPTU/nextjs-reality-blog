import { Box, Heading } from "@chakra-ui/react";
import type { ReactElement } from "react";
import React from "react";

export interface SectionProps {
  label: string;
  children: React.ReactNode;
}

export default function Section({
  label,
  children,
}: SectionProps): ReactElement {
  return (
    <Box pt={10}>
      <Heading as="h2" size="lg" pb={4}>
        {label}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
}

import { Container, Heading, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header>
      <Container
        pt={12}
        pb={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Heading size="4xl">Reality</Heading>
        <Text fontSize="xl">Keep it simple and reality</Text>
      </Container>
    </header>
  );
}

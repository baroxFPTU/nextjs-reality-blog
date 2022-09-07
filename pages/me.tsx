import { Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import type { ReactElement } from "react";

export interface MeProps {}

export default function Me(props: MeProps): ReactElement {
  return (
    <Layout>
      <Heading>Me</Heading>
    </Layout>
  );
}

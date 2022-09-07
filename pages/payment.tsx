import Layout from "components/Layout";
import Head from "next/head";
import type { ReactElement } from "react";

export interface PaymentProps {}

export default function Payment(props: PaymentProps): ReactElement {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="none" key="robots" />
      </Head>
    </Layout>
  );
}

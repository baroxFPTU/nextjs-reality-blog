import Header from "components/Common/Header";
import type { ReactElement } from "react";

export interface LayoutProps {
  children: React.ReactNode;
  type: string;
}

export default function Layout({ children, type }: LayoutProps): ReactElement {
  if (type == "main") {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }

  return (
    <>
      <h1>This is main layout</h1>
      {children}
    </>
  );
}

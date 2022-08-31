import type { ReactElement } from "react";
import React from "react";
import { ChakraBox, variants } from "./Layout";

export interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({
  children,
}: PostLayoutProps): ReactElement {
  return (
    <ChakraBox
      key="post-layout"
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </ChakraBox>
  );
}

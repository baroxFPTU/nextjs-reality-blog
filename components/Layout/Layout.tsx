import { Box, chakra } from "@chakra-ui/react";

import Header from "components/Common/Header";
import { Navbar } from "components/Common/Navbar";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import type { ReactElement } from "react";

export interface LayoutProps {
  children: React.ReactNode;
  type?: string;
}

export const variants = {
  hidden: {
    y: 20,
    x: 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: {
    y: 20,
    x: 0,
    opacity: 0,
  },
};

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function Layout({ children, type }: LayoutProps): ReactElement {
  return (
    <ChakraBox
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        duration: 0.4,
        type: "ease-in-out",
      }}
      h="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Navbar />
    </ChakraBox>
  );
}

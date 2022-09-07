import { Box, chakra } from "@chakra-ui/react";

import { Navbar } from "components/Common/Navbar";
import { isValidMotionProp, motion } from "framer-motion";
import type { ReactElement } from "react";

export interface PostLayoutProps {
  children: React.ReactNode;
  type?: string;
}

export const variants = {
  hidden: {
    y: 20,
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "easeInOut",
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "easeInOut",
    },
  },
  exit: {
    y: 20,
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "easeInOut",
    },
  },
};

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function PostLayoPostut({
  children,
  type,
}: PostLayoutProps): ReactElement {
  return (
    <ChakraBox
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      h="100vh"
      display="flex"
      flexDirection="column"
      pt={20}
    >
      <Box flexGrow={1} overflow="auto">
        {children}
      </Box>
      <Navbar />
    </ChakraBox>
  );
}

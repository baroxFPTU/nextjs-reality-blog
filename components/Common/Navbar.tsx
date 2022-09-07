import type { ReactElement } from "react";
import { Grid, Icon, Button, Container, Box } from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineCreditCard,
} from "react-icons/ai";
import styles from "styles/Navbar.module.scss";
import NextLink from "next/link";

export function Navbar(): ReactElement {
  return (
    <nav>
      <Container>
        <Grid
          className={styles.NavbarContainer}
          templateColumns="repeat(3, 1fr)"
        >
          <Box className={styles.NavbarItem}>
            <NextLink href="/">
              <a>
                <Icon as={AiOutlineHome} />
              </a>
            </NextLink>
          </Box>
          <Box className={styles.NavbarItem}>
            <NextLink href="/payment">
              <a>
                <Icon as={AiOutlineCreditCard} />
              </a>
            </NextLink>
          </Box>
          <Box className={styles.NavbarItem}>
            <NextLink href="/me">
              <a>
                <Icon as={AiOutlineUser} />
              </a>
            </NextLink>
          </Box>
        </Grid>
      </Container>
    </nav>
  );
}

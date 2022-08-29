import type { ReactElement } from "react";
import { Grid, Icon, Button, Container, Box } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import styles from "styles/Navbar.module.scss";

export function Navbar(): ReactElement {
  return (
    <nav>
      <Container>
        <Grid
          className={styles.NavbarContainer}
          templateColumns="repeat(3, 1fr)"
        >
          <Box className={styles.NavbarItem}>
            <Icon as={AiOutlineHome} />
          </Box>
          <Box className={styles.NavbarItem}>
            <Icon as={AiOutlineHome} />
          </Box>
          <Box className={styles.NavbarItem}>
            <Icon as={AiOutlineHome} />
          </Box>
        </Grid>
      </Container>
    </nav>
  );
}

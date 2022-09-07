import {
  Box,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Comment from "components/Comment/Comment";
import moment from "moment";
import NextLink from "next/link";
import type { ReactElement } from "react";
import { IPost } from "utils/posts";

export interface PostProps {
  data: IPost;
}

export const PostDefaultIThumb = () => {
  return (
    <Box
      w="100%"
      h={{ base: "150px", md: "200px" }}
      bg="gray.200"
      display="flex"
      alignItems="center"
      justifyContent="center"
      userSelect="none"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        textAlign="center"
        color="gray.300"
        textShadow="inner"
        textDecoration="none"
      >
        Barox.
      </Heading>
    </Box>
  );
};

export default function Post({ data }: PostProps): ReactElement {
  const postHref = `${data.label}/${data.id}`;

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={8}
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <NextLink href={postHref}>
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <PostDefaultIThumb />
        </Link>
      </NextLink>
      <Box
        p={6}
        display="flex"
        flexDirection="column"
        minH={{ base: "100px", md: "150px" }}
      >
        <NextLink href={postHref}>
          <Link>
            <Heading noOfLines={[1, 2, 3]} size="md" textAlign="center">
              {data.title}
            </Heading>
          </Link>
        </NextLink>
        <Box mt="auto" display="flex" justifyContent="space-between">
          <Text size="md" noOfLines={2}>
            {moment(data.createdAt).subtract(data.id, "d").format("DD/MM/YYYY")}
          </Text>
          <Tag>{data.label}</Tag>
        </Box>
      </Box>
    </Box>
  );
}

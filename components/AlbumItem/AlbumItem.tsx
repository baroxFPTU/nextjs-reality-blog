import {
  Box,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import NextLink from "next/link";
import type { ReactElement } from "react";
import { IPost } from "utils/posts";

export interface AlbumItemProps {
  data: IPost;
}

export default function AlbumItem({ data }: AlbumItemProps): ReactElement {
  return (
    <Box
      p={6}
      border="1px"
      borderColor="gray.200"
      borderRadius={8}
      display="flex"
      flexDirection="column"
    >
      <NextLink href={`albums/${data.id}`}>
        <Link>
          <Heading noOfLines={[1, 2, 3]} size="md">
            {data.title}
          </Heading>
        </Link>
      </NextLink>
      <HStack justifyContent="space-between" pt={3} pb={4}>
        <Text size="md" noOfLines={2}>
          {moment(data.createdAt).subtract(data.id, "d").format("DD/MM/YYYY")}
        </Text>
        <Tag>{data.label}</Tag>
      </HStack>
    </Box>
  );
}

import { Badge, Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { IComment } from "./Comment";

export interface CommentItemProps {
  data: IComment;
}

export default function CommentItem({ data }: CommentItemProps): ReactElement {
  return (
    <Box bg="gray.100" borderRadius={10} p={4} mb={5}>
      <Stack
        display="flex"
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        pb={3}
      >
        <Box display="flex" alignItems="center" columnGap={3}>
          <Heading as="h3" size="sm">
            {data.email}
          </Heading>
          <Badge colorScheme="blue">member</Badge>
        </Box>
        <Text fontSize="sm" fontStyle="italic">
          12/02/2022
        </Text>
      </Stack>
      <Stack>
        <Text>{data.body}</Text>
      </Stack>
      <Stack direction="row" align="center" justify="end">
        <Button size="sm">Like</Button>
        <Button size="sm">Reply</Button>
      </Stack>
    </Box>
  );
}

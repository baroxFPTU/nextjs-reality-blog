import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import type { ReactElement } from "react";

export interface IPhoto {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface PhotoListProps {
  data: IPhoto[];
}

const photoLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}&w=${width}`;
};

export default function PhotoList({ data }: PhotoListProps): ReactElement {
  return (
    <SimpleGrid columns={[1, 2, 3]} gap={3} my={6}>
      {data &&
        data.map((photo) => (
          <Box
            key={photo.id}
            pos="relative"
            borderRadius={10}
            overflow="hidden"
          >
            <Image
              loader={photoLoader}
              src={photo.url}
              width={600}
              height={600}
              alt={photo.title}
            />
            <Heading
              as="h3"
              size="md"
              pos="absolute"
              bottom={0}
              left={0}
              w="full"
              p={3}
              bg="gray.100"
              color="blackAlpha.700"
            >
              {photo.title}
            </Heading>
          </Box>
        ))}
    </SimpleGrid>
  );
}

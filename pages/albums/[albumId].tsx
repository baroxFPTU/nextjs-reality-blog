import { Container, Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import PhotoList from "components/PhotoList";
import { API_URL } from "config/api";
import Head from "next/head";
import type { ReactElement } from "react";
import { IAlbum } from "utils/posts";
import { Context } from "vm";

export interface AlbumDetailProps {
  albumData: IAlbum;
}

export default function AlbumDetail({
  albumData,
}: AlbumDetailProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>{albumData.title}</title>
        <meta name="robots" content="all" />
      </Head>
      <Container maxW={{ base: "container.sm", md: "container.md" }}>
        <Heading as="h1" size="2xl">
          {albumData.title}
        </Heading>
        <PhotoList data={albumData.photos} />
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const albums: Response = await fetch(`${API_URL}/albums?userId=1`);
  const json = await albums.json();
  const paths = json.map((album: IAlbum) => ({
    params: {
      albumId: album.id + "",
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Context) {
  const album = await fetch(`${API_URL}/albums/${params.albumId}?userId=1`);
  const photos = await fetch(`${API_URL}/photos?albumId=${params.albumId}`);
  const albumJson = await album.json();
  const photosJson = await photos.json();

  albumJson.photos = [...photosJson];

  return {
    props: {
      albumData: albumJson,
    },
  };
}

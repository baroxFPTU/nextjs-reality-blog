import { Container, Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import { API_URL } from "config/api";
import type { ReactElement } from "react";
import { IAlbum, IPost } from "utils/posts";
import { Context } from "vm";

export interface PostProps {
  postData: IPost;
}

export default function Post({ postData }: PostProps): ReactElement {
  return (
    <Layout>
      <Container maxW={{ base: "container.sm", md: "container.md" }}>
        <Heading>Post - {postData.title}</Heading>
        {postData.body}
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postReponse = await fetch(`${API_URL}/posts?userId=1`);
  const albumReponse = await fetch(`${API_URL}/albums?userId=1`);

  const postData = await postReponse.json();
  const albumData = await albumReponse.json();

  const postParams = postData.map((post: IPost) => ({
    params: { id: `${post.id}` },
  }));

  const albumParams = albumData.map((album: IAlbum) => ({
    params: { id: `${album.id}` },
  }));
  return {
    paths: [...postParams, ...albumParams],
    fallback: false,
  };
}

export async function getStaticProps({ params }: Context) {
  const postResponse = await fetch(`${API_URL}/posts/${params.id}`);
  const postData = await postResponse.json();
  return {
    props: {
      postData: postData,
    },
  };
}

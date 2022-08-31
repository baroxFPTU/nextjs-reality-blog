import { Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import PostLayout from "components/Layout/PostLayout";
import { API_URL } from "config/api";
import type { ReactElement } from "react";
import { IAlbum, IPost } from "utils/posts";
import { Context } from "vm";

export interface PostProps {
  postData: string | number;
}

export default function Post({ postData }: PostProps): ReactElement {
  return (
    <Layout>
      <Heading>Post - {postData}</Heading>
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
  return {
    props: {
      postData: params.id,
    },
  };
}

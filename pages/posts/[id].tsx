import { Box, Container, Heading } from "@chakra-ui/react";
import Comment from "components/Comment";
import { IComment } from "components/Comment/Comment";
import PostLayout from "components/Layout/PostLayout";
import { API_URL } from "config/api";
import Head from "next/head";
import Image from "next/image";
import type { ReactElement } from "react";
import { unsplashLoader } from "utils/imageLoader";
import { IAlbum, IPost } from "utils/posts";
import { Context } from "vm";

export interface PostProps {
  post: IPost;
  comments: IComment[];
}

export default function Post({ post, comments }: PostProps): ReactElement {
  return (
    <PostLayout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container maxW={{ base: "container.sm", md: "container.md" }}>
        <Heading as="h1" mb={6}>
          {post.title}
        </Heading>
        <Image
          loader={unsplashLoader}
          src="https://source.unsplash.com/random"
          width="600"
          height="300"
          layout="responsive"
          alt={post.title}
        />
        <Box as="main" p={3}>
          {post.body}
        </Box>
        <Comment data={comments} />
      </Container>
    </PostLayout>
  );
}

export async function getStaticPaths() {
  const postReponse = await fetch(`${API_URL}/posts?userId=1`);
  const albumReponse = await fetch(`${API_URL}/albums?userId=1`);

  const posts = await postReponse.json();
  const albumData = await albumReponse.json();

  const postParams = posts.map((post: IPost) => ({
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
  const commentResponse = await fetch(
    `${API_URL}/comments?postId=${params.id}`
  );
  const post = await postResponse.json();
  const comments = await commentResponse.json();

  return {
    props: {
      post: post,
      comments: [...comments],
    },
  };
}

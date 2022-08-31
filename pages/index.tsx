import Layout from "components/Layout";
import type { NextPage } from "next";
import { Container, Grid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getPostsByQuery, IAlbum, IPost } from "utils/posts";
import { Context } from "vm";
import Post from "components/Post";
import Head from "next/head";
import AlbumItem from "components/AlbumItem";

const Home: NextPage = ({ posts }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const queries = ["all", "posts", "albums"];
  useEffect(() => {
    router.push({
      query: {
        d: queries[tabIndex],
      },
    });
  }, [tabIndex]);

  const postDOMs = posts && posts.length > 0 && (
    <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]} gap={6}>
      {posts.map((post: IPost | IAlbum) => (
        <Post
          key={post.id + "." + queries[tabIndex] + post.title}
          data={post as IPost}
        />
      ))}
    </Grid>
  );
  return (
    <Layout>
      <Head>
        <title>Home - Reality Blog</title>
      </Head>
      <Container maxW={["container.sm", "container.md", "container.xl"]}>
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          onChange={(index) => setTabIndex(index)}
          defaultIndex={tabIndex}
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Posts</Tab>
            <Tab>Albums</Tab>
          </TabList>
          <TabPanels>
            <TabPanel key={1}>{postDOMs} </TabPanel>
            <TabPanel key={2}>{postDOMs}</TabPanel>
            <TabPanel key={3}>{postDOMs}</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context: Context) {
  const posts = await getPostsByQuery(context.query.d || "all", "1");

  return {
    props: {
      posts: posts || [],
    },
  };
}

export default Home;

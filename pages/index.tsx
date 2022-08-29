import Layout from "components/Layout";
import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getPostsByQuery, Post } from "utils/posts";
import { Context } from "vm";

const Home: NextPage = ({ posts }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const queries = ["all", "posts", "albums"];
  useEffect(() => {
    router.push({
      query: {
        id: 1,
        d: queries[tabIndex],
      },
    });
  }, [tabIndex]);

  console.log(posts);

  return (
    <Layout type="main">
      <Container>
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
            <TabPanel key={1}>
              <p>All here</p>
            </TabPanel>
            <TabPanel key={2}>
              {posts &&
                posts.length > 0 &&
                posts.map((post: Post) => (
                  <div key={post.id}>{post.title}</div>
                ))}
            </TabPanel>
            <TabPanel key={3}>
              {posts &&
                posts.length > 0 &&
                posts.map((post: Post) => (
                  <div key={post.id}>{post.title}</div>
                ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context: Context) {
  const posts = await getPostsByQuery(context.query.d, context.query.id);

  return {
    props: {
      posts: posts,
    },
  };
}

export default Home;

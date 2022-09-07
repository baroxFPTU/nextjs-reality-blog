import { API_URL } from "config/api";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import { IPost } from "utils/posts";
import { Context } from "vm";

const BLOG_URL = "http://localhost:3000";

function generateSiteMap(posts: IPost[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${API_URL}</loc>
        </url>
        ${posts
          .map(
            ({ id }) =>
              `
          <url>
            <loc>${BLOG_URL}/posts/${id}</loc>
          </url>
          `
          )
          .join("")}
    </urlset>
  `;
}

export interface SiteMapProps {}

export default function SiteMap(props: SiteMapProps): ReactElement {
  return <></>;
}

export async function getServerSideProps({ res }: Context) {
  const request = await fetch(`${API_URL}/posts?userId=1`);
  const posts = await request.json();

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

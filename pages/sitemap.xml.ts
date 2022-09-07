import { API_URL } from "config/api";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import { IPost } from "utils/posts";
import { Context } from "vm";

function generateSiteMap(posts: IPost[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${API_URL}</loc>
        </url>
        <url>
          <loc>${API_URL}/guide</loc>
        </url>
        ${posts
          .map(
            ({ id }) =>
              `
          <url>
            <loc>${API_URL}/posts/${id}</loc>
          </url>
          `
          )
          .join("")}
    </urlset>
  `;
}

function SiteMap(): ReactElement {
  return <></>;
}

export async function getServerSideProps({ res }: Context) {
  const request = await fetch(`${API_URL}/posts`);
  const posts = await request.json();

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap();

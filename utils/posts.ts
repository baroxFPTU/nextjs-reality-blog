import { API_URL } from "config/api";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getPostsByQuery = async (query: string, id: string) => {
  const posts: Response = await fetch(`${API_URL}/${query}?userId=${id}`);
  return posts.json();
};

import { API_URL } from "config/api";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  createdAt?: number;
  label?: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
  createdAt?: number;
  label?: string;
}

export const getPostsByQuery = async (query: string, id: string) => {
  let results: Array<IPost | IAlbum> = [];

  if (query == "all") {
    const posts = await fetch(`${API_URL}/posts?userId=${id}`);
    const albums = await fetch(`${API_URL}/albums?userId=${id}`);

    const postData: IPost[] = await posts.json();
    const albumData: IAlbum[] = await albums.json();

    postData.forEach((post) => (post.label = "posts"));
    albumData.forEach((album) => (album.label = "albums"));
    results.push(...postData, ...albumData);
  } else {
    const response: Response = await fetch(`${API_URL}/${query}?userId=${id}`);
    const data = await response.json();
    data.forEach((item: IPost | IAlbum) => (item.label = query));
    results.push(...data);
  }

  const updateResults = results.map((item) => {
    item.createdAt = Date.now();
    return item;
  });

  return updateResults;
};

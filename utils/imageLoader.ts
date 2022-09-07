import { ImageLoaderProps } from "next/image";

export const unsplashLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}&w=${width}`;
};

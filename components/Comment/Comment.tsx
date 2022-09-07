import Section from "components/Common/Section";
import type { ReactElement } from "react";
import CommentItem from "./CommentItem";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentProps {
  data: IComment[];
}

export default function Comment({ data }: CommentProps): ReactElement {
  return (
    <Section label={"Comments"}>
      {data.map((cmt) => (
        <CommentItem data={cmt} key={cmt.id} />
      ))}
    </Section>
  );
}

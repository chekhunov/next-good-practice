import Htag from "~/components/Htag";
import { Button } from "../components/Button/Button";
import Ptag from "~/components/P";
import Tag from "~/components/Tag";
import Rating from "~/components/Rating";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      ---
      <Ptag size="s">Text</Ptag>
      <Ptag>Text</Ptag>
      <Ptag size="l">Text</Ptag>
      ---
      <Button arrow="right" appearance="primary" className="dfgfh">
        Button
      </Button>
      <Button appearance="ghost" className="h">
        Button
      </Button>
      <Tag size="s">little</Tag>
      <Tag size="m" color="red">
        little
      </Tag>
      <Tag size="m" color="green">
        little
      </Tag>
      <Tag size="m" color="primary">
        little
      </Tag>
      <Rating isEditable rating={rating} setRating={setRating}></Rating>
    </div>
  );
}

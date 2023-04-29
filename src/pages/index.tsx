import Htag from "~/components/Htag";
import { Button } from "../components/Button/Button";
import Ptag from "~/components/P";
import Tag from "~/components/Tag";
import Rating from "~/components/Rating";
import { useState } from "react";
import withLayout from "../layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "~/interfaces/menu.interfaces";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/top-pages/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

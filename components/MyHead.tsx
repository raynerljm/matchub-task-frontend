import { FC } from "react";
import Head from "next/head";

const MyHead: FC = () => {
  return (
    <>
      <Head>
        <title>Matchub Questionnaire</title>
        <meta
          name="description"
          content="Matchub Questionnaire - Created by Rayner"
        />
        <link rel="icon" href="/matchub-favicon.png" />
      </Head>
    </>
  );
};
export default MyHead;

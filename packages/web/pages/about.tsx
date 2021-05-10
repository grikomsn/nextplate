import * as React from "react";

import { useGlobalStore } from "~store/global";

import { Heading, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  const count = useGlobalStore((store) => store.count);

  return (
    <>
      <NextSeo title="About" />
      <Heading>About page</Heading>
      <Text>count: {count}</Text>
      <NextLink href="/" passHref>
        <Link href="/">Back to home page</Link>
      </NextLink>
    </>
  );
};

export default AboutPage;

import * as React from "react";

import { useGlobalStore } from "~store/global";

import {
  Button,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";

const HomePage: NextPage = () => {
  const { count, increment } = useGlobalStore((store) => store);

  return (
    <>
      <Heading>Nextplate Chakra UI template</Heading>
      <UnorderedList>
        <ListItem>
          <NextLink href="/about" passHref>
            <Link>/about</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Link href="/api/ping" isExternal>
            /api/ping
          </Link>
        </ListItem>
      </UnorderedList>
      <Text>count: {count}</Text>
      <Text>
        <Button onClick={increment}>increment</Button>
      </Text>
    </>
  );
};

export default HomePage;

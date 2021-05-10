// https://nextjs.org/docs/advanced-features/custom-error-page#404-page

import * as React from "react";

import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const FourOhFourPage: NextPage = () => {
  return (
    <>
      <NextSeo description="Not found" title="404" />

      <Box>
        <Heading>404 Not found</Heading>
      </Box>
    </>
  );
};

export default FourOhFourPage;

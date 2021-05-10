// https://nextjs.org/docs/advanced-features/custom-error-page#more-advanced-error-page-customizing

import * as React from "react";

import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = (props) => {
  const { statusCode } = props;

  return (
    <>
      <NextSeo description="Something went wrong" title={`${statusCode}`} />

      <Box>
        <Heading>Something went wrong (error code {statusCode})</Heading>
      </Box>
    </>
  );
};

ErrorPage.getInitialProps = ({ err, res }) => {
  console.error(err);
  return {
    statusCode: res ? res.statusCode : err ? err.statusCode : 404,
  };
};

export default ErrorPage;

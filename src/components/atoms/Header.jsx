import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <Box bg="teal" textAlign={["left"]} p={4}>
      <SLink to="/">TOP</SLink>
      <SLink to="/users">USERS</SLink>
    </Box>
  );
};

const SLink = styled(Link)`
  margin: 0 8px;
  color: white;
`;

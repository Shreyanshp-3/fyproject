import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" bg={"#ffffff"}p={4} textAlign="center" mb={4}>
      <Heading as="h1">Symptom Checker</Heading>
    </Box>
  );
}

export default Header;

import React from 'react';
import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" textAlign="center" fontSize="14px" mt={4}>
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </Box>
  );
}

export default Footer;

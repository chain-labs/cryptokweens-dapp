import React from "react";
import Box from "src/components/Box";
import Text from "src/components/Text";

const Title = () => {
  return (
    <Box>
      <Text as="h1" fontWeight="bold" lineHeight="h1" fontFamily="satoshi">
        Create generative collection{" "}
      </Text>
    </Box>
  );
};

export default Title;

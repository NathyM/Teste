import { Box, chakra, Flex, Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      bg={"#F3F3F3"}
      boxShadow="0px 24px 32px rgba(0, 0, 0, 0.25)"
      borderRadius="70"
      justifyContent="center"
      height="573px"
      minWidth={["310px", "589px"]}
      maxWidth="1089px"
      margin={"50px"}
      padding={"5"}
    >
      {children}
      <Box p={4} display={{ md: 'flex' }}>
      <Text mt={2} color='gray.500'>

    </Text>
      </Box>
    </Flex>
  );
};

export default Card;

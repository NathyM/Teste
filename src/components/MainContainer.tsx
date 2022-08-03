import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";


import { Header } from "./commons/Header";


interface MainContainerProps {
  children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Flex direction="column">
      <Header />
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
        <Box p={4} display={{ md: "flex" }}>
          <Heading as="h1" fontSize="28" color="gray.900">
            Teste de página
          </Heading>
          <Flex>

          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

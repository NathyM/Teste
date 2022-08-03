import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../styles/ColorModeSwitcher";

export function Header(){
  return(
    <Flex padding="5" align="center" gap="3">
      <Heading> Gerenciador de Tarefas</Heading>
    <Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex> 
    </Flex>
  )
}
import { Flex } from "@chakra-ui/react";
import { Middle } from './components/Middle';
import { Right } from './components/Right';

const App = () => {
  return (
    <Flex
      justifyContent='space-between'
    >
      <Middle />

      <Right />
    </Flex>
  )
}

export { App };
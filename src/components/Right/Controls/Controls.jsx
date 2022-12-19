import { Flex } from "@chakra-ui/react";
import { StartStop } from "./StartStop";
import { StepCounter } from "./StepCounter";
import { Steps } from "./Steps";

const Controls = () => {
  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Steps />
      <StartStop />
      <StepCounter />
    </Flex>
  )
}

export { Controls };
import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ArrowRightIcon
} from '@chakra-ui/icons';
import { useState } from "react";
import { step } from "../../../canvasScipt";

const Steps = () => {
  const [warp, setWarp] = useState(10);
  
  const handleWarp = () => {
    for(let i = 0; i < warp; i++){
      setTimeout(step, i*10);
    }
  };
  
  return (
    <Flex gap={6} mb={4}>
      <Button
        onClick={step}
        colorScheme='primary'
        rightIcon={<ChevronRightIcon />}
      >
        One Step
      </Button>
      <Flex>
        <Button
          onClick={handleWarp}
          colorScheme='primary'
          borderRightRadius={0}
          rightIcon={<ArrowRightIcon />}
        >
          Warp Steps
        </Button>
        <NumberInput
          value={warp}
          onChange={value => setWarp(value)}
          min={1}
          step={10}
          allowMouseWheel
        >
          <NumberInputField
            w={100}
            backgroundColor='#fff'
            borderColor='secondary.700'
            focusBorderColor='secondary.500'
            borderWidth={2}
            borderLeftRadius={0}
            _hover={{
              focusBorderColor: 'secondary.500'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
    </Flex>
  )
}

export { Steps };
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { step } from "../../../canvasScipt";

const StartStop = () => {
  const [inter, setInter] = useState(null);

  const stop = () => {
    clearInterval(inter);
    setInter(null);
  };

  return(
    <Flex gap={6} mb={4}>
      <Button
        onClick={() => setInter(setInterval(step, 50))}
        disabled={inter ? true : false}
        colorScheme='primary'
      >
        Start
      </Button>
      <Button
        onClick={stop}
        disabled={inter ? false : true}
        colorScheme='primary'
      >
        Stop
      </Button>
    </Flex>
  );
};

export { StartStop };
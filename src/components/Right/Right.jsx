import { Box, Heading } from "@chakra-ui/react";
import { Controls } from "./Controls";

const Right = () => {
  return (
    <Box
      borderLeft='3px solid #000'
      borderColor='custom.grey.300'
      backgroundColor='secondary.100'
      minW={500}
      pt={4}
    >
      <Heading
        size='3xl'
        textAlign='center'
        color='secondary.700'
        mb={4}
      >
        Controls
      </Heading>

      <Controls />
    </Box>
  )
}

export { Right };
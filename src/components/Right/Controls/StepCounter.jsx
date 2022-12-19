import { Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import Store from "../../../Store";

const StepCounter = observer(() =>
  <Text
    fontSize='2xl'
    fontWeight={500}
    textAlign='center'
    color='secondary.700'
    mb={4}
  >
    Steps: {Store.steps}
  </Text>);

export { StepCounter };
import { Flex } from "@chakra-ui/react";
import Option from "../Option/Option";

function App() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      backgroundColor="#1C2F4F"
    >
      <Flex
        gap="20px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Option backgroundColor="#5671F5" image="1" />
        <Option backgroundColor="#ECA922" image="2" />
        <Option backgroundColor="#DD405D" image="3" />
      </Flex>
    </Flex>
  );
}

export default App;

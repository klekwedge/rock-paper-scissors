import { Flex } from "@chakra-ui/react";
import Health from "../Health/Health";
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
      <Health top="100px" right='1vw' deg='-90'/>
      <Health bottom="100px" left='1vw' deg='90'/>
    </Flex>
  );
}

export default App;

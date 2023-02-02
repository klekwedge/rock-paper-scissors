import { Button } from "@chakra-ui/react";

function Option({ backgroundColor, image }) {
  return (
    <Button
      borderRadius="50%"
      padding="20px"
      backgroundColor={backgroundColor}
      border="1px solid black"
      flex="0 0 40%"
      w="80px"
      h="110px"
      color="black"
      _hover={{
        backgroundColor: "white",
        border: `1px solid ${backgroundColor}`,
      }}
    >
      {image}
    </Button>
  );
}

export default Option;

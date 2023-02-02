import { Button } from "@chakra-ui/react";

function Option({ backgroundColor, image }) {
  return (
    <Button
      borderRadius="50%"
      padding="20px"
      backgroundColor={backgroundColor}
      border={`5px solid ${backgroundColor}`}
      flex="0 0 40%"
      transition='all 0.5s ease'
      w="80px"
      h="110px"
      color="black"
      _hover={{
        backgroundColor: "white",
        border: `5px solid ${backgroundColor}`,
      }}
    >
      {image}
    </Button>
  );
}

export default Option;

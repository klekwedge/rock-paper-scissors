import { Button, Image } from "@chakra-ui/react";

function Option({ backgroundColor, imageSrc, setCurrentHand, option }) {
  return (
    <Button
      borderRadius="50%"
      backgroundColor={backgroundColor}
      flex="0 0 40%"
      transition="all 0.5s ease"
      w="80px"
      h="110px"
      color="black"
      _hover={{
        backgroundColor: "white",
      }}
      onClick={() => setCurrentHand(option)}
    >
      <Image src={imageSrc} w="100%" h="100%" />
    </Button>
  );
}

export default Option;

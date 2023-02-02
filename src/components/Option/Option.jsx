import { Button, Image } from "@chakra-ui/react";

function Option({ backgroundColor, imageSrc, setCurrentHand, option }) {
  return (
    <Button
      borderRadius="50%"
      backgroundColor={backgroundColor}
      flex="0 0 40%"
      transition="all 0.3s ease"
      w="90px"
      h="130px"
      color="black"
      _hover={{
        transform: 'scale(1.10)'
      }}
      onClick={() => setCurrentHand(option)}
    >
      <Image src={imageSrc} w="100%" h="100%" />
    </Button>
  );
}

export default Option;

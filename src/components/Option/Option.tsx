import { Button, Image } from "@chakra-ui/react";

interface OptionProps {
  backgroundColor: string;
  imageSrc: string;
  setCurrentHand: () => void;
}

function Option({ backgroundColor, imageSrc, setCurrentHand }: OptionProps) {
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
        transform: "scale(1.10)",
      }}
      onClick={() => setCurrentHand()}
    >
      <Image src={imageSrc} w="100%" h="100%" />
    </Button>
  );
}

export default Option;

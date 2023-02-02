import { Image, Flex, Progress } from "@chakra-ui/react";

function Health({ top, left, bottom, right, deg, progressColor }) {
  return (
    <Flex
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      color="red"
      transform={`rotate(${deg}deg)`}
    >
      <Progress
        w="150px"
        colorScheme={progressColor}
        size="md"
        value={100}
        borderRadius="5px"
      />
      <Image transform={`rotate(${-deg}deg)`} />
    </Flex>
  );
}

export default Health;

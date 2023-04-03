import { Image, Flex, Progress } from '@chakra-ui/react';

interface HealthProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  deg: string;
  progressColor: string;
  imageSrc: string;
  health: number;
}

function Health({ top, left, bottom, right, deg, progressColor, imageSrc, health }: HealthProps) {
  return (
    <Flex
      borderRadius="10px"
      alignItems="center"
      gap="20px"
      justifyContent="center"
      position="absolute"
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      transform={`rotate(${deg}deg)`}
    >
      <Progress w="150px" colorScheme={progressColor} size="md" value={health} borderRadius="5px" />
      <Flex gap="5px" transform={`rotate(${-deg}deg)`} flexDirection="column" alignItems="center">
        <Image src={imageSrc} w="50px" />
      </Flex>
    </Flex>
  );
}

Health.defaultProps = {
  top: '',
  left: '',
  bottom: '',
  right: '',
};

export default Health;

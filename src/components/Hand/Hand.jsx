import { Image } from "@chakra-ui/react";

function Hand({ top, left, right, bottom, imageSrc, deg }) {
  return (
    <Image
      src={imageSrc}
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      transform={`rotate(${deg}deg)`}
    />
  );
}

export default Hand;

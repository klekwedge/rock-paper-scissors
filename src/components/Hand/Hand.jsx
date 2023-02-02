import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Hand({ top, left, right, bottom, deg, currentHand }) {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    switch (currentHand) {
      case "idle":
        setCurrentImage("svg/male_idle.svg");
        break;
      case "rock":
        setCurrentImage("svg/male_rock.svg");
        break;
      case "paper":
        setCurrentImage("svg/male_paper.svg");
        break;
      case "scissors":
        setCurrentImage("svg/male_scissors.svg");
        break;
      default:
        setCurrentImage("svg/male_idle.svg");
    }
  }, [currentHand]);

  return (
    <Image
      src={currentImage}
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

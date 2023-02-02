import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Hand({ top, left, right, bottom, deg }) {
  // const [currentImage, setCurrentImage] = useState("");

  // useEffect(() => {
  //   switch (currentHand) {
  //     case "idle":
  //       setCurrentImage("/public/svg/male_idle.svg");
  //       break;
  //     case "rock":
  //       setCurrentImage("/public/svg/male_rock.svg");
  //       break;
  //     case "paper":
  //       setCurrentImage("/public/svg/male_paper.svg");
  //       break;
  //     case "scissors":
  //       setCurrentImage("/public/svg/male_scissors.svg");
  //       break;
  //     default:
  //       setCurrentImage("/public/svg/male_idle.svg");
  //   }
  // }, [currentHand]);

  return (
    <Image
      src="/public/svg/male_idle.svg"
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

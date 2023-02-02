import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Hand from "../Hand/Hand";
import Health from "../Health/Health";
import Option from "../Option/Option";

function App() {
  const [currentHand, setCurrentHand] = useState("idle");

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      backgroundColor="#1C2F4F"
      overflow="hidden"
      position="relative"
    >
      <Flex
        gap="30px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Option
          backgroundColor="#5671F5"
          image="1"
          imageSrc="/public/svg/rock_icon.svg"
          option='rock'
          setCurrentHand={setCurrentHand}
        />
        <Option
          backgroundColor="#ECA922"
          image="2"
          imageSrc="/public/svg/paper_icon.svg"
          option='paper'
          setCurrentHand={setCurrentHand}
        />
        <Option
          backgroundColor="#DD405D"
          image="3"
          imageSrc="/public/svg/scissors_icon.svg"
          option='scissors'
          setCurrentHand={setCurrentHand}
        />
      </Flex>
      <Health
        top="150px"
        right="1vw"
        deg="-90"
        progressColor="red"
        imageSrc="/public/img/villain.png"
      />
      <Health
        bottom="150px"
        left="1vw"
        deg="90"
        progressColor="green"
        imageSrc="/public/img/superhero.png"
      />
      {/* <Hand
        top="-30px"
        left="1vw"
        deg={180}
        imageSrc="/public/svg/male_idle.svg"
      /> */}
      <Hand right="1vw" bottom="-30px" deg={0} currentHand={currentHand} />
    </Flex>
  );
}

export default App;

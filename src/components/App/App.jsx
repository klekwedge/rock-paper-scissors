import { Flex } from "@chakra-ui/react";
import {
  changeComputerHand,
  changePlayerHand,
} from "../../slices/handsSlice/handsSlice";
import { useDispatch } from "react-redux";
import ComputerHand from "../ComputerHand/ComputerHand";
import Health from "../Health/Health";
import Option from "../Option/Option";
import PlayerHand from "../PlayerHand/PlayerHand";

function App() {
  const dispatch = useDispatch();

  function generateRandomOption() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
    return "rock";
  }

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
          setCurrentHand={() => {
            dispatch(changePlayerHand("rock"));
            dispatch(changeComputerHand(generateRandomOption()));
          }}
        />
        <Option
          backgroundColor="#ECA922"
          image="2"
          imageSrc="/public/svg/paper_icon.svg"
          setCurrentHand={() => {
            dispatch(changePlayerHand("paper"));
            dispatch(changeComputerHand(generateRandomOption()));
          }}
        />
        <Option
          backgroundColor="#DD405D"
          image="3"
          imageSrc="/public/svg/scissors_icon.svg"
          setCurrentHand={() => {
            dispatch(changePlayerHand("scissors"));
            dispatch(changeComputerHand(generateRandomOption()));
          }}
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
      <ComputerHand />
      <PlayerHand />
    </Flex>
  );
}

export default App;

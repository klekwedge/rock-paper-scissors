import { Flex, Heading } from "@chakra-ui/react";
import {
  changeComputerHand,
  changeHealth,
  changePlayerHand,
} from "../../slices/handsSlice/handsSlice";
import { useDispatch, useSelector } from "react-redux";
import ComputerHand from "../ComputerHand/ComputerHand";
import Health from "../Health/Health";
import Option from "../Option/Option";
import PlayerHand from "../PlayerHand/PlayerHand";

function App() {
  const dispatch = useDispatch();
  const { playerHealth, computerHealth, status } = useSelector(
    (state) => state.hands
  );

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
      {status === "game" ? (
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
              dispatch(changeHealth());
            }}
          />
          <Option
            backgroundColor="#ECA922"
            image="2"
            imageSrc="/public/svg/paper_icon.svg"
            setCurrentHand={() => {
              dispatch(changePlayerHand("paper"));
              dispatch(changeComputerHand(generateRandomOption()));
              dispatch(changeHealth());
            }}
          />
          <Option
            backgroundColor="#DD405D"
            image="3"
            imageSrc="/public/svg/scissors_icon.svg"
            setCurrentHand={() => {
              dispatch(changePlayerHand("scissors"));
              dispatch(changeComputerHand(generateRandomOption()));
              dispatch(changeHealth());
            }}
          />{" "}
        </Flex>
      ) : (
        <Heading
          color={status === "win" ? "#32CD32" : "#DC143C"}
          textTransform="uppercase"
        >
          You {status}
        </Heading>
      )}
      <Health
        top="150px"
        right="1vw"
        deg="-90"
        progressColor="red"
        imageSrc="/public/img/villain.png"
        health={computerHealth}
      />
      <Health
        bottom="150px"
        left="1vw"
        deg="90"
        progressColor="green"
        imageSrc="/public/img/superhero.png"
        health={playerHealth}
      />
      <ComputerHand />
      <PlayerHand />
    </Flex>
  );
}

export default App;

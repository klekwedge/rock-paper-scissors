import { useSelector } from "react-redux";
import Hand from "../Hand/Hand";

function ComputerHand() {
  const { computerHand } = useSelector((state) => state.hands);

  return <Hand top="-30px" left="1vw" deg={180} currentHand={computerHand} />;
}

export default ComputerHand;

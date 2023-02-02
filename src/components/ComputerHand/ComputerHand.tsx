import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Hand from "../Hand/Hand";

function ComputerHand() {
  const { computerHand } = useSelector((state: RootState) => state.hands);

  return <Hand top="-30px" left="1vw" deg={180} currentHand={computerHand} />;
}

export default ComputerHand;

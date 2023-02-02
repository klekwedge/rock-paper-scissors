import { useDispatch, useSelector } from "react-redux";
import Hand from "../Hand/Hand";

function PlayerHand() {
  const { playerHand } = useSelector((state) => state.hands);
  return <Hand right="1vw" bottom="-30px" deg={0} currentHand={playerHand} />;
}

export default PlayerHand;

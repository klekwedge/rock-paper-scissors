import Hand from "../Hand/Hand";

function ComputerHand() {
  return (
    <Hand
      top="-30px"
      left="1vw"
      deg={180}
      imageSrc="/public/svg/male_idle.svg"
    />
  );
}

export default ComputerHand;

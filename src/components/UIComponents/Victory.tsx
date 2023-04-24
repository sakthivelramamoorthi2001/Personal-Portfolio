import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

type props = {
  won: true;
  piese: number;
};

const app: any = (props: props) => {
  const { width, height } = useWindowSize();
  console.log(props.piese);

  return props.won ? (
    <Confetti numberOfPieces={props.piese} width={width} height={height} />
  ) : (
    ""
  );
};

export default app;

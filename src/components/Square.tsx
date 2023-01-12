export enum SquareState {
  Empty,
  Red,
  Black,
}

interface SquareProps {
  state: SquareState;
}

const bgClassMap: Record<SquareState, string> = {
  [SquareState.Empty]: "",
  [SquareState.Red]: "bg-red-500",
  [SquareState.Black]: "bg-black",
};

const Square = ({ state }: SquareProps) => {
  return (
    <span className="w-28 h-28 border-solid border-2 border-grey-500 flex items-center justify-center">
      <div className={`w-24 h-24 rounded-full ${bgClassMap[state]}`} />
    </span>
  );
};

export default Square;

export enum SquareState {
  Empty = "O",
  Red = "r",
  Black = "b",
}

interface SquareProps {
  state: SquareState;
}

const bgClassMap: Record<SquareState, string> = {
  [SquareState.Empty]: "bg-white",
  [SquareState.Red]: "bg-red-500",
  [SquareState.Black]: "bg-black",
};

const Square = ({ state }: SquareProps) => {
  return (
    <span className="w-28 h-28 border-solid border-2 border-yellow-400 flex items-center justify-center bg-yellow-300">
      <div className={`w-24 h-24 rounded-full ${bgClassMap[state]}`} />
    </span>
  );
};

export default Square;

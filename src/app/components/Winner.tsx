import React from "react";

interface WinnerProps {
  winner: string | null;
}

const Winner: React.FC<WinnerProps> = ({ winner }) => {
  return winner ? <h3>Winner: {winner}</h3> : null;
};

export default Winner;

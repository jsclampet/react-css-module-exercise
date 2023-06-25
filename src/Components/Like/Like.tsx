import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  color: string;
  size?: string;
  onClick: () => void;
}

const Like = ({ color, size, onClick }: Props) => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <p>
        <AiFillHeart color={color} size={size} onClick={onClick} />
      </p>
    </>
  );
};

export default Like;

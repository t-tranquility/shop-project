import { FC, useState } from "react";

interface NeonBorderProps {
  borderColor: string;
}

const LikeBtn: FC<NeonBorderProps> = ({ borderColor }) => {
  const [isLiked, setIsLiked] = useState(false);

  const neonBorderStyles = {
    borderColor: borderColor,
    boxShadow: `0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 10px ${borderColor}`,
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className="p-2 w-10 h-10 relative inline-block rounded-lg"
      style={neonBorderStyles}
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{ ...neonBorderStyles, filter: "blur(10px)" }}
      ></div>
      <svg
        className=""
        viewBox="0 0 24 24"
        fill={isLiked ? borderColor : "transparent"}
        stroke={borderColor}
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default LikeBtn;

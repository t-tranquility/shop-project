import { FC, useState } from "react";

interface CartItem {
  imageUrl: string;
  title: string;
  price: number;
  borderColor: string;
}
interface NeonBorderProps {
  borderColor: string;
  item: CartItem;
  onRemove: (item: CartItem) => void;
}

const RemoveBtn: FC<NeonBorderProps> = ({ borderColor, item, onRemove }) => {
  const [isClicked, setIsClicked] = useState(false);

  const neonBorderStyles = {
    borderColor: borderColor,
    boxShadow: `0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 10px ${borderColor}`,
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    onRemove(item);
  };

  const buttonStyles = {
    backgroundColor: isClicked ? `${borderColor}80` : "transparent",
  };

  return (
    <button
      className="p-2 w-10 h-10 relative inline-block rounded-lg"
      style={{ ...neonBorderStyles, ...buttonStyles }}
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{ ...neonBorderStyles, filter: "blur(10px)" }}
      ></div>
      <svg
        className=""
        viewBox="0 0 24 24"
        fill={isClicked ? "black" : borderColor}
        stroke={borderColor}
        strokeWidth="2"
      >
        <path d="M5 5l14 14M19 5l-14 14" />
      </svg>
    </button>
  );
};



export default RemoveBtn;

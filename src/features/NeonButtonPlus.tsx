import { FC, useState } from "react";
import useCartStore from "../shared/config/useCartStore";

interface NeonBorderProps {
  borderColor: string;
  item: {
    imageUrl: string;
    title: string;
    price: number;
  };
}


const NeonButtonPlus: FC<NeonBorderProps> = ({ borderColor, item }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { addItem } = useCartStore();

  const neonBorderStyles = {
    borderColor: borderColor,
    boxShadow: `0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 10px ${borderColor}`,
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    addItem({
      imageUrl: item.imageUrl,
      title: item.title,
      price: item.price,
      borderColor: borderColor,
    });
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
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  );
};



export default NeonButtonPlus;

import { FC, useState } from 'react';
import { FavoriteItem } from '../shared/types';
import useFavoritesStore from '../shared/config/useFavoritesStore';

interface LikeBtnProps {
  borderColor: string;
  item: FavoriteItem;
}

const LikeBtn: FC<LikeBtnProps> = ({ borderColor, item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addItem, removeItem, items } = useFavoritesStore();

  const neonBorderStyles = {
    borderColor: borderColor,
    boxShadow: `0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 10px ${borderColor}`,
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  const isItemInFavorites = items.some((favoriteItem) => favoriteItem.title === item.title);

  return (
    <button
      className="p-2 w-10 h-10 relative inline-block rounded-lg"
      style={neonBorderStyles}
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{ ...neonBorderStyles, filter: 'blur(10px)' }}
      ></div>
      <svg
        className=""
        viewBox="0 0 24 24"
        fill={isItemInFavorites ? borderColor : 'transparent'}
        stroke={borderColor}
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default LikeBtn;

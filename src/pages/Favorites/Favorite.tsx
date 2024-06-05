import { FC } from 'react';
import { CartCard } from '../../widgets/CartCard';
import useFavoritesStore from '../../shared/config/useFavoritesStore';

export const FavoritesPage: FC = () => {
  const { items, removeItem } = useFavoritesStore();

  return (
    <div className="max-w-[1290px] w-full mx-auto my-[50px]">
      {items.length > 0 ? (
        <>
          <p className="text-3xl uppercase mb-16">Favorites</p>
          <div className="flex flex-wrap gap-20">
            {items.map((item) => (
              <CartCard
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                borderColor={item.borderColor}
                item={item}
                onRemove={removeItem}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[500px]">
          <img src="icons/emptyFavorites.svg" width={100} height={100} alt="" />
          <p className="mt-16 text-3xl uppercase">Your favorites is empty</p> <br />
          <p className="text-sm text-gray-500">
            Go to the main page and add some sneakers to your favorites
          </p>
        </div>
      )}
    </div>
  );
};

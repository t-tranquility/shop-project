import { FC } from 'react';
import NeonBorder from '../features/NeonBorder';
import NeonButtonPlus from '../features/NeonButtonPlus';
import LikeBtn from '../features/LikeBtn';
import { FavoriteItem } from '../shared/types';

type Props = {
  imageUrl: string;
  title: string;
  price: number;
  borderColor: string;
  item: FavoriteItem;
};

export const Card: FC<Props> = ({ imageUrl, title, price, borderColor, item }) => {
  return (
    <NeonBorder borderColor={borderColor}>
      <div className="w-[260px] flex flex-col rounded-lg p-8 !bg-transparent backdrop-blur">
        <LikeBtn borderColor={borderColor} item={item} />
        <div className="flex items-center flex-col">
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5 className="my-14">{title}</h5>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className=" text-gray-500 uppercase">Цена: </span>
              <b>{price} руб.</b>
            </div>
            <NeonButtonPlus borderColor={borderColor} item={item} />
          </div>
        </div>
      </div>
    </NeonBorder>
  );
};

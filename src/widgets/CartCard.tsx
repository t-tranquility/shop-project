import { FC } from "react";
import NeonBorder from "../features/NeonBorder";
import RemoveBtn from "../features/RemoveBtn";

interface CartItem {
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
  }

type Props = {
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
    item: CartItem;
    onRemove: (item: CartItem) => void;
  };

export const CartCard: FC<Props> = ({ imageUrl, title, price, borderColor, item, onRemove }) => {
    return (
        <NeonBorder borderColor={borderColor}>
            <div className="w-[260px] flex flex-col rounded-lg p-8 !bg-transparent backdrop-blur">
                <div className="flex items-center flex-col">
                    <img width={133} height={112} src={imageUrl} alt="" />
                    <h5 className="my-14">{title}</h5>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col">
                            <span className=" text-gray-500 uppercase">Цена: </span>
                            <b>${price}</b>
                        </div>
                        <RemoveBtn borderColor={borderColor} item={item} onRemove={onRemove} />
                    </div>
                </div>
            </div>
        </NeonBorder>
    );
};

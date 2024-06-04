import { FC } from "react";
import NeonBorder from "../features/NeonBorder";
import NeonButtonPlus from "../features/NeonButtonPlus";
import  LikeBtn  from "../features/LikeBtn";

type Props = {
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
};

export const Card: FC<Props> = ({ imageUrl, title, price, borderColor }) => {

    const item = {
        imageUrl,
        title,
        price,
      };
      

    return (
        <NeonBorder borderColor={borderColor}>
            <div className="w-[260px] flex flex-col rounded-lg p-8 !bg-transparent backdrop-blur">
                <LikeBtn borderColor={borderColor} />
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

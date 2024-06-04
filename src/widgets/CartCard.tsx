import { FC } from "react";
import NeonBorder from "../features/NeonBorder";
import RemoveBtn from "../features/RemoveBtn";

type Props = {
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
};

export const CartCard: FC<Props> = ({ imageUrl, title, price, borderColor }) => {
    return (
        <NeonBorder borderColor={borderColor}>
            <div className="max-w-[600px] w-full p-4 flex items-center gap-4 rounded-lg !bg-transparent backdrop-blur">
                <img width={75} height={50} src={imageUrl} alt="" />
                <div className="flex flex-col mr-6">
                    <h5>{title}</h5>
                    <b>{price} руб.</b> 
                </div> 
                <RemoveBtn borderColor={borderColor} />
            </div>
        </NeonBorder>
    );
};

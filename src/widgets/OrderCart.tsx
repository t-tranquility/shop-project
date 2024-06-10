import { FC } from "react";

type Props = {
    imageUrl: string;
    title: string;
    price: number;
  };

export const OrderCart: FC<Props> = ({ imageUrl, title, price}) => {
    return(
        <div className="flex flex-row items-center gap-6 justify-between border border-gray-300 rounded-md p-4">
          <img width={50} src={imageUrl} alt="" />
          <h5 className="max-w-[200px] w-full">{title}</h5>
          <div className="flex justify-between  items-center w-full">
            <div className="flex flex-col fixed right-16">
              <b>{price} руб.</b>
            </div>
          </div>
        </div>
    )
}
import { FC } from "react";
import { Card } from "../../widgets/Card";
import { cardData } from "./utils/CardData";

export const MainPage: FC = () => {
    return(
        <div className="max-w-[1290px] w-full mx-auto my-[50px]">
            <p className="text-3xl uppercase mb-16">All products</p>
            <div className="flex flex-wrap gap-20">
                {cardData.map(card => <Card key={card.title} {...card} />)} 
            </div>
        </div>
    )
}

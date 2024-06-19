// import { FC } from "react";
// import { Card } from "../../widgets/Card";
// import { cardData } from "./utils/CardData";

// export const MainPage: FC = () => {
//     return (
//       <div className="max-w-[1290px] w-full mx-auto my-[50px]">
//         <p className="text-3xl uppercase mb-16">All products</p>
//         <div className="flex flex-wrap gap-20">
//           {cardData.map((card) => (
//             <Card item={card} key={card.title} {...card} />
//           ))}
//         </div>
//       </div>
//     );
//   };

import { FC, SetStateAction, useState } from "react";
import { Card } from "../../widgets/Card";
import { cardData } from "./utils/CardData";

export const MainPage: FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="max-w-[1290px] w-full mx-auto my-[50px]">
      <div className="flex flex-row justify-between items-center mb-16">
        <p className="text-3xl uppercase">Все товары</p>
        <input
          type="text"
          placeholder="Поиск"
          value={searchInput}
          onChange={handleSearchChange}
          className="p-2 !bg-transparent border border-gray-400 rounded-md appearance-none"
        />
      </div>
      <div className="flex flex-wrap gap-20">
        {filteredCards.map((card) => (
          <Card item={card} key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

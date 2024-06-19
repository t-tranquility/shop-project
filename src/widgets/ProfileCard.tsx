import { FC } from 'react';

interface Item {
  title: string;
  imageUrl: string;
  price: number;
}

interface Order {
  items: Item[];
  size: string;
  paymentMethod: string;
  date: string;
}

export const ProfileCard: FC<Order> = ({ items, size, paymentMethod, date }) => {
  return (
    <div className="w-[290px] flex flex-col rounded-lg p-8 pr-4 !bg-transparent backdrop-blur border border-gray-300">
      <div className="flex items-left flex-col">
        <div className='flex flex-row items-center'>
            {items.map((item) => (
                <div key={item.title} className="mb-2">
                <div className='flex flex-row gap-4 mb-4'>
                    <img src={item.imageUrl} alt={item.title} className="w-[70px] h-auto mb-2 rounded" />
                    <p className="font-medium">{item.title}</p>
                </div>
                <p className="text-lg font-light">Цена: <span>${item.price}</span></p>
                </div>
            ))}
        </div>
        <div className='text-left text-gray-400'>
          <p className="text-md font-light mb-2">Размер: {size}</p>
          <p className="text-md font-light mb-2">Способ оплаты: {paymentMethod}</p>
          <p className="text-sm mt-2">Дата доставки: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

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
    <div className="w-[260px] flex flex-col rounded-lg p-8 !bg-transparent backdrop-blur border border-gray-300">
      <div className="flex items-center flex-col">
        <div className='flex flex-row'>
            {items.map((item) => (
                <div key={item.title} className="mb-2">
                <div className='flex flex-row gap-4 mb-2'>
                    <img src={item.imageUrl} alt={item.title} className="w-[55px] h-auto mb-2 rounded" />
                    <p className="font-medium">{item.title}</p>
                </div>
                <p className="text-lg font-light">Price: <span>${item.price}</span></p>
                </div>
            ))}
        </div>
        <div className='text-left text-gray-400 mr-8'>
          <p className="text-md font-light mb-2">Size: {size}</p>
          <p className="text-md font-light mb-2">Payment Method: {paymentMethod}</p>
          <p className="text-sm mt-2">Delivery Date: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

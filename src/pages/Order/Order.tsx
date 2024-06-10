import { FC, useState } from "react";
import { OrderCart } from "../../widgets/OrderCart";
import useCartStore from "../../shared/config/useCartStore";

export const Order: FC = () => {
    const [username, setUsername] = useState('');
    const { items } = useCartStore();
    
    return (
        <div className="max-w-[1290px] w-full mx-auto my-[50px]">
            <div className="border rounded-md !bg-transparent backdrop-blur border-gray-300 w-full max-w-[700px] text-white p-8 mx-auto">
                <p className="text-center text-xl mb-8">Order</p>
                <div className="mb-6">
                    <p className="text-lg mb-4">You're order:</p>
                    {items.map((item) => (
                        <OrderCart key={item.title} imageUrl={item.imageUrl} title={item.title} price={item.price} />
                    ))}
                </div>
                <div className="flex flex-col justify-center gap-8 items-center">
                    <p>Delivery information:</p>
                    <input
                        type="text"
                        placeholder="Adress"
                        value={username}
                        className='p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full' 
                    />
                    <input
                        type="text"
                        placeholder="Adress"
                        value={username}
                        className='p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full' 
                    />
                </div>
            </div>
            
        </div>
    )
}
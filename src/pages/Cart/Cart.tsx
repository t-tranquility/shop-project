import { FC } from "react";
import useCartStore from "../../shared/config/useCartStore";
import { CartCard } from "../../widgets/CartCard";
import { Link } from "react-router-dom";


export const Cart: FC = () => {

  const { items, removeItem } = useCartStore();

    return(
        <div className="max-w-[1290px] w-full mx-auto my-[50px]">
          
          {items.length > 0 ? (
            <>
            <div className="flex justify-between items-center mb-16">
              <p className="text-3xl uppercase">Корзина</p>
              <Link to="/make-order" className="bg-opacity-50 backdrop-filter backdrop-blur-sm border py-2 px-4 border-gray-500 rounded-xl hover:border-gray-100">Сделать заказ</Link>
            </div>
            <div className="flex flex-wrap gap-20">
            {items.map((item) => (
              <CartCard
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                borderColor={item.borderColor}
                item={item}
                onRemove={removeItem}
              />
          ))}
          </div> </>) : (
            <div className="flex flex-col justify-center items-center h-[500px]">
              <img src="icons/emptyCart.svg" width={100} height={100} alt="" />
              <p className="mt-16 text-3xl uppercase">Ваша корзина пустая</p> <br />
              <p className="text-sm text-gray-500">Перейдите на главную страницу и добавьте несколько кроссовок в избранное</p>
            </div>
          )}
        </div>
    )
}

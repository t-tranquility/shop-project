import { FC } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../shared/config/useCartStore";

export const Header: FC = () => {
  const { cartSum, toggleCart } = useCartStore();

  return (
    <>
      <div className="flex justify-between items-center max-w-[1290px] w-full mx-auto mt-6 px-12 py-4 !bg-transparent  border-b-white border-b-2">
        <Link to="/">
          <p className="uppercase text-5xl font-extrabold">sneakers</p>
          <p className="text-sm font-extralight">магазин лучших кроссовок</p>
        </Link>
        <div className="flex gap-12 items-center">
          {/* link to */}
          <Link to="/favorites" className="flex gap-2 items-center text-base">
            <img className="w-8 h-8" src="icons/heart.svg" alt="" />
            <p>Избранное</p>
          </Link>
          <Link to="/cart" onClick={toggleCart} className="flex gap-2 items-center">
            <img className="w-8 h-8" src="icons/cart.svg" alt="" />
            <p>Корзина</p>
            {cartSum > 0 && <span className="text-white border-white border-2 text-xs px-2 py-1 rounded-full ml-2">${cartSum}</span>}
          </Link>
          <Link to="/profile" className="flex gap-2 items-center">
            <img className="w-6 h-6" src="profile.svg" alt="" />
            <p>Профиль</p>
          </Link>
        </div>
      </div>
    </>
  );
};

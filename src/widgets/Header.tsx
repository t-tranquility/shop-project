import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    return(
        <>
            <div className="flex justify-between items-center max-w-[1290px] w-full mx-auto mt-6 px-12 py-4 !bg-transparent backdrop-blur border-b-white border-b-2">
                <Link to="/">
                    <p className="uppercase text-5xl font-extrabold">sneakers</p>
                    <p className="text-sm font-extralight">магазин лучших кроссовок</p>
                </Link>
                <div className="flex gap-12 items-center">
                {/* link to */}
                    <div className="flex gap-2 items-center text-base"> 
                        <img className="w-8 h-8" src="icons/heart.svg" alt="" />
                        <p>favorite</p>
                    </div>
                    <Link to="/cart" onClick={toggleCart} className="flex gap-2 items-center">
                        <img className="w-8 h-8" src="icons/cart.svg" alt="" />
                        <p>cart</p>
                    </Link>
                    <div className="flex gap-2 items-center">
                        <img className="w-6 h-6" src="profile.svg" alt="" />
                        <p>profile</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

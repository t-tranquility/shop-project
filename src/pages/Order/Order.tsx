import { FC, useState } from "react";
import { OrderCart } from "../../widgets/OrderCart";
import useCartStore from "../../shared/config/useCartStore";
import SuccessModal from "./SuccessModal";

export const Order: FC = () => {
  const [username, setUsername] = useState("");
  const [size, setSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { items, cartSum } = useCartStore();

  const sizes: string[] = Array.from({ length: 10 }, (_, i) => (36 + i).toString());

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const showSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const hideSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const resetForm = () => {
    setUsername("");
    setSize("");
    setPaymentMethod("");
    setDate("");
    setTime("");
    setPhoneNumber("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const order = {
      username: loggedInUser.username,
      items: items.map((item) => ({
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
      })),
      size: size,
      paymentMethod: paymentMethod,
      date: date,
      time: time,
      phoneNumber: phoneNumber,
    };

    let userOrders: any = JSON.parse(localStorage.getItem("userOrders") || "{}");

    if (!userOrders[loggedInUser.username]) {
      userOrders[loggedInUser.username] = [];
    }

    userOrders[loggedInUser.username].push(order);

    localStorage.setItem("userOrders", JSON.stringify(userOrders));

    resetForm();

    showSuccessModal();

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <div className="max-w-[1290px] w-full mx-auto my-[50px]">
      <div className="border rounded-md !bg-transparent backdrop-blur border-gray-300 w-full max-w-[700px] text-gray-300 p-8 mx-auto">
        <p className="text-center text-3xl mb-4 uppercase font-thin">Order</p>
        <div className="mb-6">
          <p className="text-lg mb-4">Your order:</p>
          {items.map((item) => (
            <OrderCart key={item.title} imageUrl={item.imageUrl} title={item.title} price={item.price} />
          ))}
          <p className="text-md mt-4">Total price: {cartSum}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center gap-8 items-center">
            <p>Delivery information:</p>
            <input
              type="text"
              placeholder="Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
            />
            <select
              id="size-select"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="p-2 border border-white !bg-[#1b1b1b] bg-transparent rounded-md max-w-[500px] w-full appearance-none"
            >
              <option value="" disabled>Choose a size:</option>
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 border border-white !bg-[#1b1b1b] rounded-md max-w-[500px] w-full appearance-none"
            >
              <option value="" disabled>Select a payment method</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
            />
          <button
            type="submit"
            className="p-2 max-w-[200px] border-2 border-white w-full text-white rounded-md hover:border-gray-300"
          >
            Submit Order
          </button>
          </div>
        </form>
      </div>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={hideSuccessModal} />
    </div>
  );
};

export default Order;

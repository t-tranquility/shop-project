import { FC, useEffect, useState } from "react";
import {ProfileCard} from "../../widgets/ProfileCard";

interface Item {
  title: string;
  imageUrl: string;
  price: number;
}

interface Order {
  username: string;
  items: Item[];
  size: string;
  paymentMethod: string;
  date: string;
}

export const Profile: FC = () => {
  console.log('Profile component is rendered');
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (loggedInUser) {
      setUsername(loggedInUser.username);
      setSavedPassword(loggedInUser.password);

      const userOrders = JSON.parse(localStorage.getItem("userOrders") || "{}");
      if (userOrders[loggedInUser.username]) {
        setOrders(userOrders[loggedInUser.username]);
      }
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setOldPassword("");
    setNewPassword("");
    setErrorMessage("");
  };

  const handleSave = () => {
    if (oldPassword !== savedPassword) {
      setErrorMessage("Incorrect old password");
      return;
    }

    const loggedInUser = { username, password: newPassword || savedPassword };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setSavedPassword(newPassword || savedPassword);
    setIsEditing(false);
  };

  return (
    <div className="max-w-[1290px] w-full mx-auto my-[50px]">
      <div className="border rounded-md !bg-transparent backdrop-blur border-gray-300 w-full max-w-[700px] text-gray-300 p-8 mx-auto">
        <p className="text-center text-4xl mb-4 uppercase font-thin">Profile</p>
        <p className="text-2xl mb-4">User information:</p>
        {isEditing ? (
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
              placeholder="Username"
            />
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
              placeholder="Old Password"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2 border border-white bg-transparent rounded-md max-w-[500px] w-full"
              placeholder="New Password"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              onClick={handleSave}
              className="p-2 max-w-[200px] border-2 border-white w-full text-white rounded-md hover:border-gray-300"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="mb-6 gap-2 flex flex-col">
            <p>Name: {username}</p>
            <p>Password: ••••••••</p>
            <button
              onClick={handleEditToggle}
              className="p-2 max-w-[200px] border-2 border-white w-full text-white rounded-md hover:border-gray-300 mt-4"
            >
              Edit
            </button>
          </div>
        )}
        <p className="text-2xl mb-4">Orders:</p>
        <div className="flex flex-row gap-4 justify-evenly">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <ProfileCard
              key={index}
              items={order.items}
              size={order.size}
              paymentMethod={order.paymentMethod}
              date={order.date}
            />
          ))
        ) : (
          <p>No orders found.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

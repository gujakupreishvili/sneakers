
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../../public/assets/sneakers.png";
import user from "../../../public/assets/user.png";

export default function Header({handleCheckbox}:any) {
  return (
    <div className="flex items-center justify-between px-[24px] py-[20px]">
      <div className="flex items-center gap-[16px]">
      <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-[23px]">
        <FiShoppingCart className="h-[20px] w-[21px] text-gray-500 cursor-pointer " onClick={handleCheckbox}  />
        <img src={user} alt="" />
      </div>
    </div>
  );
}

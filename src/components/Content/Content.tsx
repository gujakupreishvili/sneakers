import Slider from "../BasicSlider.tsx/Slider";
import rect2 from "../../../public/assets/smallImg/Rectangle Copy 2 (1).png"
import Header from "../Header/Header";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Content() {
  const [number , setNumber]=useState(0)
  const [product, setProduct]=useState(false)
  const [boxnum, setboxNum]=useState(0)
  const [checkbox,setCheckbox]=useState(false)
  const handleClick = () => {
    setNumber(number + 1);
  };
  const handleMinus = () =>{
    if(number==0){
      return 0
    }
    setNumber(number-1)
  }
  const addCard = () =>{
    if(number==0){
      setProduct(false)
    }
    else{
      setboxNum(number+boxnum)
      setNumber(0)
      setProduct(true)
    }
    if(boxnum!=0){
      setProduct(true)
    }
  }
  const handleCheckbox = () =>{
    setCheckbox(!checkbox)
    
  }
    let a= 125.00
    let b = a*boxnum

    const handledelete = () => {
      setProduct(false);
      setboxNum(0);
  }
  

  console.log(boxnum)
  console.log(product)
  return (
    <>
      <Header  handleCheckbox={handleCheckbox}/>
      <div className={product ?"bg-[#FF7E1B] text-white w-[19px] h-[13px] rounded-[7px] absolute top-[18px] right-[63px]":"hidden"}>
        <p className="text-[10px] pl-[6px] pb-[6px]">{boxnum}</p>
      </div>
      <div className={checkbox ? "block w-[360px] rounded-[10px] h-[297px]  bg-white flex-col mb-[40px]  shadow-black shadow lg:absolute right-[0%]":"hidden"}>
        <h1 className="pl-[24px] py-[24px] text-16px text-[#1D2026]">Cart</h1>
        <hr />
        {product ? 
        <div className="px-[24px] pt-[24px] pb-[32px]">
          <div className="flex items-center mb-[24px] gap-[16px]">
            <img src={rect2} alt="" />
            <div>
              <p className="text-[#69707D] text-[16px]">Fall Limited Edition Sneakers</p>
              <p className="text-[#69707D]">$125.00 x {boxnum} <span className="font-bold text-black">${b}.00</span></p>
            </div>
          <RiDeleteBin5Line onClick={handledelete} />
          </div>
         <button className="w-[312px] h-[56px] bg-[#FF7E1B] rounded-[10px] text-white font-bold cursor-pointer "onClick={handleCheckbox}>Checkout</button>
        </div>
          :<p className="flex items-center justify-center h-[200px] text-[#69707D] text-[16px] font-bold">Your cart is empty.</p>}
      </div>
      <div className=" flex flex-col mt-[30px] items-center lg:flex lg:flex-row lg:gap-[125px] lg:justify-center">
        <Slider />
        <div className="flex  flex-col mt-[50px] px-[24px]">
          <p className="text-orange-600 pb-[19px] font-bold">Sneaker Company</p>
          <h1 className="w-[327px] text-black text-[28px] font-bold leading-8 pb-[15px]" >Fall Limited Edition Sneakers</h1>
          <p className=" text-[15px] text-gray-600 w-[327px] leading-[25px] pb-[24px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex  items-center justify-between mb-[24px]">
            <div className="flex  items-center gap-[16px]"> 
              <p className="text-[28px] text-black font-bold">$125.00</p>
              <p className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[7px] pl-[10px] text-[#FF7E1B] font-bold">50%</p>
            </div>
            <p className="text-[16px] text-gray-500 line-through">$250.00</p>
          </div>
          <div className="flex flex-col gap-[16px]  ">
            <div className="flex items-center justify-between  h-[56px] w-[100%] bg-[#F6F8FD] rounded-[10px]">
              <p className="pl-[24px] text-[#FF7E1B]  text-[44px] cursor-pointer"onClick={handleMinus}>-</p>
              <p>{number}</p>
              <p className="pr-[24px] text-[#FF7E1B]  text-[28px] cursor-pointer" onClick={handleClick}>+</p>
            </div>
            <button 
            className="h-[56px] w-[100%] bg-[#FF7E1B] rounded-[10px] flex items-center justify-center gap-[15px] text-white  mb-[40px] cursor-pointer hover:bg-[#FFAB6A]"
            style={{ boxShadow: '0px 20px 50px -20px #FF7E1B' }} 
            onClick={addCard}>
              <FiShoppingCart />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

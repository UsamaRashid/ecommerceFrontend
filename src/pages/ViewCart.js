import React, { useContext, useEffect } from "react";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const { handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  useEffect(() => {
    handleClose();
  });

  return (
    <div className='pt-20 px-4 container mx-auto'>
      <div className='flex items-center justify-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping bag({itemAmount})
        </div>
      </div>

      {cart.length === 0 ? (
        <div className='flex justify-center items-center  py-3 '>
          No items in cart
        </div>
      ) : (
        <>Items</>
      )}
      <div className='flex flex-col gap-y-2 h-[400px] lg:h-[400px]  overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}></CartItem>;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-center items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>
              Total: Rs.{parseFloat(total).toFixed(2)}
            </span>
          </div>
        </div>
        <Link
          to={"/"}
          className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'
        >
          Continue Shopping
        </Link>

        {cart.length !== 0 && (
          <>
            <div
              className='bg-red-500 flex p-4 justify-center items-center text-white w-full font-medium'
              onClick={clearCart}
            >
              Clear Cart
            </div>

            <Link
              to={"/"}
              className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewCart;

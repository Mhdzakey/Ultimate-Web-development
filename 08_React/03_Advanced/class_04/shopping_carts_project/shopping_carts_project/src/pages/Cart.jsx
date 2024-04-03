import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return (
                <CartItem key={item.id} item={item} itemIndex={itemIndex} />
              );
            })}
          </div>
          <div>
          <div>Your Cart</div>
          <div>Summary </div>
          <p><span>Total Items: {cart.length}</span></p>
          </div>

          <div>
            <p>Total Amount: {totalAmount}</p>
            <button>CheckOut Now</button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col text-green-600 relative justify-center items-center ">
          <h1 >Cart Empty</h1>
          <NavLink>
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;

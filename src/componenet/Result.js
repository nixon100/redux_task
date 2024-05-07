import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTotalToList,
  addQty,
  Minus,
  Plus,
  Remove,
} from "../slices/tasksSlice";
import Item from "./Item";

const Result = () => {
  const { tasksList, total } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const prices = tasksList.map((product) => product.price);
    const totall = prices.reduce((acc, price) => acc + price, 0);
    dispatch(addTotalToList(totall));
  }, [tasksList]);

  useEffect(() => {
    dispatch(addQty());
    console.log("sdsdsds");
  }, []);

  const Minuss = (index) => {
    dispatch(Minus(index));
  };

  const Pluss = (id) => {
    dispatch(Plus(id));
  };

  const Removee = (id) => {
    dispatch(Remove(id));
  };
  return (
    <div className="CartContainer">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <h5 className="Action">Remove all</h5>
      </div>

      {tasksList.map((item, index) => (
        <>
          {/* Call the Calculate function with the item as an argument */}
          <Item
            key={index}
            item={item}
            pri={() => Pluss(index)}
            pri1={() => Minuss(index)}
            onRemove={()=>Removee(index)}
          />
        </>
      ))}

      <hr />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">
              {tasksList.length > 1
                ? `${tasksList.length} items`
                : `${tasksList.length} item`}
            </div>
          </div>
          <div className="total-amount">{total}</div>
        </div>
        <button className="button">Checkout</button>
      </div>
    </div>
  );
};

export default Result;

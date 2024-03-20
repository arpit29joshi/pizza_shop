import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placingOrderData } from "../constants";
import { addNewOrder } from "../redux/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PlacingOrder() {
  const { maxOrder } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  //
  const [data, setData] = useState({
    type: placingOrderData.types[0],
    size: placingOrderData.size[0],
    base: placingOrderData.base[0],
  });
  //
  //
  const { type, size, base } = data;
  //
  //
  function updateState(e) {
    setData((prv) => ({ ...prv, [e.target.id]: e.target.value }));
  }
  //
  //
  return (
    <div className="bg-img-1">
      <form>
        <label>Type</label>
        <select value={type} id="type" onChange={(e) => updateState(e)}>
          {placingOrderData.types.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Size</label>
        <select value={size} id="size" onChange={(e) => updateState(e)}>
          {placingOrderData.size.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Base</label>
        <select value={base} id="base" onChange={(e) => updateState(e)}>
          {placingOrderData.base.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      {maxOrder < 10 ? (
        <button
        
          className="size-22 mt-1 "
          onClick={() => {
            dispatch(addNewOrder(data));
            toast.success("Order Added Successfully");
            setTimeout(()=>{
              navigate("/")
            },500)
          }}
        >
          Submit
        </button>
      ) : (
        <h1 className="mt-1 color-red">Not taking any order for now !!!</h1>
      )}
      <button className="size-22" onClick={() => navigate("/")}>
        Home
      </button>
      <ToastContainer />
    </div>
  );
}

export default PlacingOrder;

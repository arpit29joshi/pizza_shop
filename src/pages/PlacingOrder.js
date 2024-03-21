import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maxOrderLimit, placingOrderData } from "../constants";
import { addNewOrder } from "../redux/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PlacingOrder() {
  // Redux States
  const { maxOrder } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  //useState 
  const [data, setData] = useState({
    type: placingOrderData.types[0],
    size: placingOrderData.size[0],
    base: placingOrderData.base[0],
  });
  const [disable,setDisable]=useState(false)
  const { type, size, base } = data;
  //
  //update fn. for use state
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
      {maxOrder < maxOrderLimit ? (
        <button
          disabled={disable}
          className="size-22 mt-1 "
          onClick={() => {
            setDisable(true)
            dispatch(addNewOrder(data));
            toast.success("Order Added Successfully");
            setTimeout(()=>{
              navigate("/")
            },1000)
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

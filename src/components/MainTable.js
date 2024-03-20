import React, { useEffect, useState } from "react";
import { orderStage } from "../constants";
import { useDispatch } from "react-redux";
import { cancel } from "../redux/orderSlice";
import calculateTime from "../helper/calculateTime";

function MainTable({ orders, orderDelivered }) {
  const date = new Date();
  let time = date.getTime();
  const [currentTime, setTime] = useState(time);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(Date.now());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <table className="mt-1">
      <tr>
        <th>Order Id</th>
        <th>Stage</th>
        <th>Total time spent (time from order placed)</th>
        <th>Action</th>
      </tr>

      {orders.map((item, i) => {
        const {minutes,seconds}= calculateTime(currentTime,item?.timestamp)
        return (
          <tr key={i}>
            <td>{item.order}</td>
            <td>{orderStage[item.stages]}</td>
            <td>{`${minutes} min. ${seconds} sec.`}</td>
            {item.stages < 2 && (
             <td>
             <button
                onClick={() => dispatch(cancel({ orderId: item?.order }))}
              >
                Cancel
              </button>
              </td>
            )}
          </tr>
        );
      })}
      <tr className="gold-border">
        <td className="gold-border bold">Total order delivered</td>
        <td className="gold-border bold">{orderDelivered}</td>
      </tr>
    </table>
  );
}

export default MainTable;

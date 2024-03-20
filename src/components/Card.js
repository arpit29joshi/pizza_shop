import React, { useEffect, useState } from "react";
import { orderStage, tiemAccToSize } from "../constants";
import { useDispatch } from "react-redux";
import { nextStage } from "../redux/orderSlice";
import calculateTime from "../helper/calculateTime";

function Card({ orders, stage }) {
  const orderArray = orders.filter((item) => item.stages === stage);
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
    <div className="card-body ">
      <h4 className="text-center">{orderStage[stage]}</h4>
      <div className="flex-col mt-1">
        {orderArray.map((item, i) => {
          const { minutes, seconds } = calculateTime(
            currentTime,
            item?.stageTime
          );
          return (
            <div
              key={i}
              className={`card flex-col bg-${item?.stages} ${
                minutes >= tiemAccToSize[item?.size] && item?.stages != 3
                  ? "bg-red"
                  : ""
              }`}
            >
              <p className="bold">Order {item?.order}</p>
              {item?.stages != 3 ? (
                <p>{`${minutes} min. ${seconds} sec.`}</p>
              ) : (
                <p>Picked</p>
              )}
              {stage <= 2 && (
                <button
                  onClick={() =>
                    dispatch(
                      nextStage({ orderId: item?.order, currentStage: stage })
                    )
                  }
                >
                  Next
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;

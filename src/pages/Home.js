import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import MainTable from "../components/MainTable";
import { maxOrderLimit } from "../constants";
function Home() {
  // Redux
  const { maxOrder, orderId, orders, orderDelivered } = useSelector(
    (state) => state.order
  );
  const navigate = useNavigate();
  //
  return (
    <div className="flex-col h-100 bg-img-2">
      {maxOrder >= maxOrderLimit && (
        <div className="glass mt-1 ">
          <h1 className="col-white">Not taking any order for now !!!</h1>
        </div>
      )}
      <h2 className="mt-1 ">Pizza Stages Section</h2>
      <div className="glass flex  mt-1 ">
          <Card orders={orders} stage={0} />
          <Card orders={orders} stage={1} />
          <Card orders={orders} stage={2} />
          <Card orders={orders} stage={3} />
      </div>
      <h2 className="mt-1">Main Section</h2>
      <MainTable
        maxOrder={maxOrder}
        orderId={orderId}
        orders={orders}
        orderDelivered={orderDelivered}
      />
      <button className="size-22 mb-1 mt-1" onClick={() => navigate("/order")}>
        New Order
      </button>
    </div>
  );
}

export default Home;

const placingOrderData = {
  types: ["Veg", "Non-Veg"],
  size: ["Large", "Medium", "Small"],
  base: ["Thin", "Thick"],
};

const orderStage = {
  0: "Order Placed",
  1: "Order in Making",
  2: "Order Ready",
  3: "Order Picked",
};
const tiemAccToSize = {
  Small: 3,
  Medium: 4,
  Large: 5,
};

export { placingOrderData, orderStage,tiemAccToSize };

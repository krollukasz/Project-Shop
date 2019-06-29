import { stat } from "fs";

export default function (state = { "summary": 0, "add": [] }, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let added = [...state.add, action.payload];
      state.added.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += 1;
          added = [...state.added]
        }
      })
      return {
        "add": added,
        "summary": state.summary + action.payload.price,
      }

    case "QUANTITY_ADD":
      state.added.map((product) => {
        if (product.id === action.payload.id) { 
          product.quantity += 1
        }
      })
      return {
        "add": [...state.added],
        "summary": state.summary + action.payload.price,
      }

    case "QUANTITY_REMOVE":
      state.added.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= 1
        }
      })
      return {
        "add": state.added.filter(function (object) { return object.quantity !== 0 }),
        "summary": state.summary - action.payload.price,
      }

    default:
      return state;
  }
  // return state;
}

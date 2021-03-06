export default function (state = { "added": [], "summary": 0 }, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let added = [...state.added, action.payload];
      state.added.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += 1;
          added = [...state.added]
        }
      })
      return {
        "added": added,
        "summary": state.summary + action.payload.price,
      };

    case "QUANTITY_ADD":
      state.added.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += 1
        }
      })
      return {
        "added": [...state.added],
        "summary": state.summary + action.payload.price,
      };

    case "QUANTITY_REMOVE":
      state.added.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= 1
        }
      })
      return {
        "added": state.added.filter(function (object) { return object.quantity !== 0 }),
        "summary": state.summary - action.payload.price,
      };

    case "REMOVE_ALL_PRODUCTS":
      return {
        "add": [],
        "summary": 0
      };

    default:
      return state;
  }
}

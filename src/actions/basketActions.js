export const getProduct = (product) => {
  return {
    type: "GET_PRODUCT",
    payload: product
  }
}

export const quantityAdd = (product) => {
  return {
    type: "QUANTITY_ADD",
    payload: product
  }
}

export const quantityRemove = (product) => {
  return {
    type: "QUANTITY_REMOVE",
    payload: product
  }
}

export const removeAllProducts = () => {
  return {
    type: "REMOVE_ALL_PRODUCTS"
  }
}
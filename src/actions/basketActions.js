export const getProduct = (product) => {
  return {
    type: "GET_PRODUCT",
    product
  }
}

export const quantityAdd = (product) => {
  return {
    type: "QUANTITY_ADD",
    product
  }
}

export const quantityRemove = (product) => {
  return {
    type: "QUANTITY_REMOVE",
    product
  }
}

export const removeAllProducts = () => {
  return {
    type: "REMOVE_ALL_PRODUCTS"
  }
}
import React from 'react';
// import { connect } from 'react-redux';
import { Product } from './Product';
// import { Products } from './Products';

// Import styles
// import "./ProductList.scss";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state.products;
  }

  render() {
    return(
      <div className="productList">
        {
          this.state.products.map((product, i) => (
            <Product
              key={i}
              index={i}
              name={product.name}
              description={product.description}
              price={product.price}
              productInfo={product.productInfo}
              image={product.image}
            />
          ))
        }
      </div>
    );
  };
}

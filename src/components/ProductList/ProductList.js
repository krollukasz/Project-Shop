import React from 'react';
import { connect } from 'react-redux';
import { Product } from './Product';
// import { Products } from './Products';

// Import styles
// import "./ProductList.scss";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      currentProducts: [0, 6]
    };
    this.elements = this.props.sorted.products.length;
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.elements / this.pageSize);
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index,
      currentProducts: [index * this.pageSize, (index + 1) * this.pageSize]
    });
  }

  render() {
    return (
      <div className="product-list">
        {
          (this.props.sorted.products.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => {
            return (
              <Product
                key={i}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                productInfo={product.productInfo}
                image={product.image}
              />
            );
          })
        }
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);

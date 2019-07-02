import React from 'react';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../../actions/productsActions';
import { connect } from 'react-redux';

// Import styles
// import "./ProductItem.scss";

export class ProductItem extends React.Component {
  render() {
    return (
      <div className="productItemPage">
        <div className="row">
          <div className="productItem-photo">
            <img 
              className="productItem-image"
              src={this.props.products[this.props.match.params.id].image}
              alt="product-photo"
            />
          </div>

          <div className="productItem-description">
            <p className="productItem-name">
              {this.props.products[this.props.match.params.id].name}
            </p>
            <p className="productItem-price">
              $ {this.props.products[this.props.match.params.id].price.toFixed(2)}
            </p>
            <p className="productItem-desc">
              {this.props.products[this.props.match.params.id].description}
            </p>
          </div>

          <button 
            className="productItemPage-addToBasketButton"
            onClick={() => this.props.addToBasket(this.props.product[this.props.match.params.id])}
          >
            Add to basket
          </button>

        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { addToBasket: addToBasket }, dispatch
  );
}

export default connect (mapStateToProps, matchDispatchToProps)(ProductItem);

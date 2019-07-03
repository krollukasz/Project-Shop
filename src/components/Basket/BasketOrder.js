import React from 'react';
import { bindActionCreators } from 'redux';
import { quantityAdd, quantityRemove } from '../../actions/basketActions';
import { connect } from 'react-redux';

// Import styles
import './Basket.scss';

export class BasketOrder extends React.Component {
  createOrder() {
    return this.props.basket.added.map((product) => {
      return (
        <div className="basket-order-products row" key={product.id}>
          <div className="basket-order-products-image col-2">
            <img 
              className="basket-order-products-img"
              src={product.image}
              alt="product-photo"
            />
          </div>

          <div className="basket-order-products-description col-5">
            <h2 className="basket-order-products-description-name">
              {product.name}
            </h2>
            <p className="basket-order-products-description-text">
              {product.description}
            </p>
          </div>

          <div className="basket-order-products-price col-2">
            ${(product.price * product.quantity).toFixed(2)}
          </div>
          <div className="basket-order-products-quantity col-3">
            <button className="basket-order-products-quantity-btn" onClick={() => this.props.quantityRemove(product)}>-</button>
            <p
              className="basket-order-products-quantity-value">
              {product.quantity}
            </p>
            <button className="basket-order-products-quantity-btn" onClick={() => this.props.quantityAdd(product)}>+</button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="basket-order-header">Your shopping:</h1>

        {this.createOrder()}

        <div className="basket-order-discount-code row">
          <div className="col-9"></div>
          <div className="col-3"><input className="basket-order-input" placeholder="Discount code" /></div>
        </div>
        <div className="basket-order-total row">
          <div className="col-9"></div>
          <div className="basket-order-total-pay col-3">Total: {this.props.basket.summary.toFixed(2)} $</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basket
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { quantityAdd, quantityRemove }, dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(BasketOrder);

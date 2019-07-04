import React from 'react';
import { connect } from 'react-redux';

// Import styles
import './Basket.scss';

export class BasketSummary extends React.Component {
  summary() {
    return this.props.basket.added.map((product) => {
      return (
        <div className="basket-summary-product row" key={product.id}>
          <div className="basket-summary-product-name col-6">{product.name}</div>
          <div className="basket-summary-product-price col-2">{product.quantity}</div>
          <div className="basket-summary-product-price col-2">$ {product.price.toFixed(2)}</div>
          <div className="basket-summary-product-price col-2">$ {(product.price * product.quantity).toFixed(2)}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="basket-summary">
        <h1 className="basket-summary-header">Your order</h1>
        <div className="basket-summary-main row">
          <div className="basket-summary-line-name col-6">Name</div>
          <div className="basket-summary-main-item col-2">Quantity</div>
          <div className="basket-summary-main-item col-2">Price</div>
          <div className="basket-summary-main-item col-2">Full price</div>
        </div>

        {this.summary()}

        <div className="row basket-summary-main">
          <div className="basket-summary-main-item-name col-10">TOTAL</div>
          <div className="basket-summary-main-item-total col-2">$ {this.props.basket.summary.toFixed(2)}</div>
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

export default connect(mapStateToProps)(BasketSummary);

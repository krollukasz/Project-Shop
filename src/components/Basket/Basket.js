import React from 'react';
import BasketOrder from './BasketOrder';
// import BasketSummary from './BasketSummary';

// Import styles
import "./Basket.scss";

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "summaryOrder": false
    }
  }

  initialSummary() {
    this.setState({
      "summaryOrder": true
    })
  }

  render() {
    if (this.state.summaryOrder === false) {
      return (
        <div className="basket">
          <BasketOrder />
          <div className="basket-pay row">
            <div className="col-8"></div>
            <div className="col-4">
              <button className="basket-orderSummary" onClick={() => { this.initialSummary() }}>Pay</button>
            </div>
          </div>
        </div>
      );

    }

    else if (this.state.summaryOrder === true) {
      // return (
        // <BasketSummary />
      // );
    }
  }
};

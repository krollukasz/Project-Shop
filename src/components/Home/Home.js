import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import { sort } from './sort';
import { connect } from 'react-redux';

// Import styles
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "products": this.props.products
    };
  }

  sort(event) {
    // event.preventDefault();
    this.setState({
      "products": this.props.products.sort(sort(event.target.dataset.prop, event.target.dataset.order))
    });
  }

  render() {
    return (
      <div className="home">
        <div className="home-sort col-sm-12 col-md-4 col-lg-3">
          <p className="home-sort-header">
            Sort:
          </p>
          <ul className="home-sort-list">
            <li className="home-sort-list-item" data-prop="name" data-order="asc" onClick={event => this.sort(event)}>Name: A-Z</li>
            <li className="home-sort-list-item" data-prop="name" data-order="desc" onClick={event => this.sort(event)}>Name: Z-A</li>
            <li className="home-sort-list-item" data-prop="price" data-order="asc" onClick={event => this.sort(event)}>Price: ascending</li>
            <li className="home-sort-list-item" data-prop="price" data-order="desc" onClick={event => this.sort(event)}>Price: descending</li>
          </ul>
        </div>
        <ProductList sorted={this.state} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);

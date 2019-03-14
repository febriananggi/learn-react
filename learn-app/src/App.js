import React, { Component } from 'react';
import Total from './Total'
import ProductForm from './ProductForm';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {qty: 0}
  }

  buy() {
    this.setState({qty: this.state.qty +1})
    this.props.handleTotal(this.props.price)
  }

  show() {
    this.props.handleShow(this.props.name)
  }
  
  render() {
    return (
      <div>
          <p>{this.props.name} - ${this.props.price}</p>
          <button onClick={this.buy.bind(this)}>Buy</button>
          <button onClick={this.show.bind(this)}>Show</button>
          <h3>Qty: {this.state.qty} item(s)</h3>
          <hr/>
      </div>
    );
  }
}

  class Product extends Component {
    constructor(props) {
      super(props)
      this.state = {
        total: 0,
        product: [
          { name: "Android", price: 199 },
          { name: "Apple", price: 195 },
          { name: "Nokia", price: 100 }
        ]
      }
    }

    createProduct(producties) {
      this.setState({
        product: this.state.product.concat(producties)
      })
    }

      calculateTotal(price) {
        this.setState({total: this.state.total +price})
      }

    showProduct(name) {
      alert("You selected " +name);
    }

    render() {
      var component = this;
      var products = this.state.product.map(function(product) {
        return (
          <App name={product.name} price={product.price}
            handleShow={component.showProduct}
            handleTotal={component.calculateTotal.bind(component)}/>
        )
      }
      )
      return (
        <div>
          <ProductForm handleCreate={this.createProduct.bind(this)}/>
          {products}
          <Total total={this.state.total}/>
        </div>
      )
    }
  }


export default Product;

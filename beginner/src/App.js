import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import { Card, CardImg, CardBody, Button, 
        Container, Row, Col, CardFooter } from 'reactstrap';
import Lenovo from './Lenovo.jpg';
import AsusVivo from './AsusVivo.jpg';
import AppleMacbookPro from './AppleMacbookPro.jpg';
import HP from './HP.jpeg';
import SamsungNotebook from './SamsungNotebook.jpg';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {qty: 0}
  }

    buy() {
      this.setState({qty: this.state.qty +1});
      this.props.handleTotal(this.props.price)
    }

    render() {
    return (
      <Container className="bodyAll">
        <Col>
          <Card id="main">
            <CardImg id="myImages" src={this.props.image} alt="Card image cap"/>
              <CardBody id="body">
              </CardBody>
            <CardFooter>
              <div>
                  {this.props.name}
                  <h5>Rp{this.props.price}</h5><br/>
                  <Button color="success" onClick={this.buy.bind(this)}>Buy</Button>
                  <span><b>Qty: {this.state.qty} Item(s)</b></span>
              </div>
              </CardFooter>
          </Card>
        </Col>
      </Container>
    );
  }
}

  class ProductList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
                total: 0,
                productList: [
                { name: "Lenovo", price: 5000000.00, image: Lenovo },
                { name: "Asus Vivo", price: 5000000.00, image: AsusVivo },
                { name: "Apple MacBook Pro", price: 5000000.00, image: AppleMacbookPro }, 
                { name: "Samsung NoteBook", price: 5000000.00, image: SamsungNotebook },
                ]  
              }
    }

      calculateTotal(price) {
        this.setState({
          total: this.state.total +price})
      }

      createProduct(product) {
        this.setState({
          productList: this.state.productList.concat(product)
        })
      }

    render() {
      var component = this;
      const products = this.state.productList.map( (product) => 
                      <App name={product.name} price={product.price} image={product.image}
                        handleTotal={component.calculateTotal.bind(component)} />
      )
      return (
        <div>
          <Header handleCreate={this.createProduct.bind(this)}/>
          {products}
          <Footer total={this.state.total}/>
        </div>
      )
    }
  }


export default ProductList;

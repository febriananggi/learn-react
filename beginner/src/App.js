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
      this.state = {total: 0}
    }

      calculateTotal(price) {
        this.setState({total: this.state.total +price})
      }

    render() {
      return (
        <div>
          <App name="Lenovo" price="5.000.000" image={Lenovo}
            handleTotal={this.calculateTotal}/>
          <App name="Asus VivoBook" price="5.000.000" image={AsusVivo}
            handleTotal={this.calculateTotal.bind(this)}/>
          <App name="Apple Macbook Pro" price="5.000.000" image={AppleMacbookPro}
            handleTotal={this.calculateTotal.bind(this)}/>
          <App name="Samsung NoteBook" price="5.000.000" image={SamsungNotebook}
            handleTotal={this.calculateTotal.bind(this)}/>
          <Footer total={this.state.total}/>
        </div>
      )
    }
  }


export default ProductList;

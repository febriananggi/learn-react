import React from 'react' 
import {Container, Button} from 'reactstrap'
import './Header.css';

class Header extends React.Component {
    submit(e) {
        e.preventDefault();
        var product = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }

        this.props.handleCreate(product);

        this.refs.name.value = "";
        this.refs.price.value = "";

    }
    render() {
        return (
            <div>
                <Container className="container-fluid">
                    <div className="myInput">
                        <form onSubmit={this.submit.bind(this)}>
                            <input type="text" placeholder="Create Product" ref="name"/> -
                            <input type="text" placeholder="Create Price" ref="price"/>
                            <button>ADD PRODUCT</button>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header;
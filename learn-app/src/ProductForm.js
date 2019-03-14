import React from 'react';

class ProductForm extends React.Component {
    submit(e) {
        e.preventDefault();
        var producties = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }
        
        this.props.handleCreate(producties)
         
        this.refs.name.value = "";
        this.refs.price.value = "";
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.submit.bind(this)}>
                    <input type="text" placeholder="Product Name ..." ref="name"/> - 
                    <input type="text" placeholder="Product Price ..." ref="price"/>
                    <button>Add</button>
                </form>
                <hr/>
            </div>
        )
    }
}

export default ProductForm;
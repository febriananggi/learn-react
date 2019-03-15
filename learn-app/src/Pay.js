import React from 'react'

class Pay extends React.Component {
    render() {
        return (
            <button onClick={this.payment}>
                <h2>Pay</h2>
            </button>
        )
    }
}

export default Pay;
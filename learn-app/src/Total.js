import React from 'react'

class Total extends React.Component {
    render() {
        return (
            <div>
                <h3>Total Cash: ${this.props.total}</h3>
            </div>
        )
    }
}

export default Total;
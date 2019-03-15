import React from 'react'
import {Container, Row, Col} from 'reactstrap'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <h4>Total Cash: Rp{this.props.total}</h4>
                </footer>
            </div>
        )
    }
}

export default Footer;
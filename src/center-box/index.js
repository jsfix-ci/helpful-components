import React from "react"
import PropTypes from "prop-types"
import {
    Container,
} from "./elements"

class CenterBox extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
    };
    render() {
        const {
            children
        } = this.props
        return (
            <Container>
                {children}
            </Container>
        )
    }
}

export default CenterBox


import React from "react"
import PropTypes from "prop-types"
import {
    Container
} from "./elements"

class ResponsiveWidthContainer extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired,
        align: PropTypes.bool
    };
    static defaultProps = {
        align: false,
    };
    render() {
        const {
            children,
            align
        } = this.props
        return (
            <Container align={align}>
                {children}
            </Container>
        )
    }
}

export default ResponsiveWidthContainer
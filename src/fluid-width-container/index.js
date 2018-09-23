import React from "react"
import PropTypes from "prop-types"
import {
    Container
} from "./elements"

class FluidWidthContainer extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired,
        align: PropTypes.bool,
        padding: PropTypes.number,
        stretchChild: PropTypes.bool
    };
    static defaultProps = {
        align: false,
        padding: 1,
        stretchChild: false
    };
    render() {
        const {
            children,
            align,
            padding,
            stretchChild
        } = this.props
        return (
            <Container
                align={align}
                padding={padding}
                stretchChild={stretchChild}>
                {children}
            </Container>
        )
    }
}

export default FluidWidthContainer
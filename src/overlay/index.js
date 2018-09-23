import React from "react"
import PropTypes from "prop-types"
import {
    Container,
    Content
} from "./elements"

class Overlay extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired,
        content: PropTypes.node.isRequired,
        backgroundColor: PropTypes.string
    }
    static defaultProps = {
        backgroundColor: "rgba(22, 22, 22, 0.50)"
    };
    state = {
        isVisible: false
    };
    handleMouseOver = () => {
        this.setState({
            isVisible: true
        })
    };
    handleMouseLeave = () => {
        this.setState({
            isVisible: false
        })
    }
    renderContent = () => {
        const {
            content,
            backgroundColor,
        } = this.props
        return (
            <Content backgroundColor={backgroundColor}>
                {content}
            </Content>
        )
    }
    render() {
        const {
            isVisible
        } = this.state
        const {
            children
        } = this.props
        const renderedContent = (isVisible ? this.renderContent() : null)
        return (
            <Container
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}>
                {renderedContent}
                {children}
            </Container>
        )
    }
}

export default Overlay
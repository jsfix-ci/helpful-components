import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

class Overlay extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired,
		renderOverlay: PropTypes.func.isRequired
	}
	state = {
		isVisible: false
	}
	handleMouseEnter = () => {
		this.setState({
			isVisible: true
		})
	}
	handleMouseLeave = () => {
		this.setState({
			isVisible: false
		})
	}
	render() {
		const { isVisible } = this.state
		const { children, renderOverlay } = this.props
		const renderedOverlay = isVisible ? renderOverlay() : null
		return (
			<Container
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>
				{renderedOverlay}
				{children}
			</Container>
		)
	}
}

export default Overlay

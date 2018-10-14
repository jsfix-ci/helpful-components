import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

class Overlay extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired,
		render: PropTypes.func.isRequired
	}
	state = {
		isVisible: false
	}
	handleMouseOver = () => {
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
		const { children, render } = this.props
		const rendered = isVisible ? render() : null
		return (
			<Container
				onMouseOver={this.handleMouseOver}
				onMouseLeave={this.handleMouseLeave}>
				{rendered}
				{children}
			</Container>
		)
	}
}

export default Overlay

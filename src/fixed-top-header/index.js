import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"
import { Container, FixedContainer } from "./elements"

class FixedTopHeader extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired,
		size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		zIndex: PropTypes.number
	}
	static defaultProps = {
		zIndex: 50
	}
	render() {
		const { children, size, zIndex } = this.props
		// Convert sizes to string before sending them to the elements.
		var sizeString = size
		if (_.isNumber(sizeString)) {
			sizeString = size.toString() + "px"
		}
		return (
			<Container size={sizeString} zIndex={zIndex}>
				<FixedContainer size={sizeString}>{children}</FixedContainer>
			</Container>
		)
	}
}

export default FixedTopHeader

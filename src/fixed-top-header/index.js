import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"
import { Container, FixedContainer } from "./elements"

function FixedTopHeader({ children, size, zIndex, containerClassName }) {
	// Convert sizes to string before sending them to the elements.
	var sizeString = size
	if (_.isNumber(sizeString)) {
		sizeString = size.toString() + "px"
	}
	return (
		<Container className={containerClassName} size={sizeString} zIndex={zIndex}>
			<FixedContainer size={sizeString}>{children}</FixedContainer>
		</Container>
	)
}

FixedTopHeader.defaultProps = {
	containerClassName: "FixedTopHeader",
	zIndex: 50
}

FixedTopHeader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
		//...
	]).isRequired,
	zIndex: PropTypes.number,
	containerClassName: PropTypes.string
}

export default FixedTopHeader

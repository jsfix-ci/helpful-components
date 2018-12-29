import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

function ResponsiveWidthContainer({ children, align, containerClassName }) {
	return (
		<Container className={containerClassName} align={align}>
			{children}
		</Container>
	)
}

ResponsiveWidthContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	align: PropTypes.bool,
	containerClassName: PropTypes.string
}

ResponsiveWidthContainer.defaultProps = {
	containerClassName: "ResponsiveWidthContainer",
	align: false
}

export default ResponsiveWidthContainer

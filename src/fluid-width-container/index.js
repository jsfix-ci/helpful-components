import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

function FluidWidthContainer({
	children,
	align,
	padding,
	stretch,
	containerClassName
}) {
	return (
		<Container
			className={containerClassName}
			align={align}
			padding={padding}
			stretch={stretch}>
			{children}
		</Container>
	)
}

FluidWidthContainer.defaultProps = {
	containerClassName: "FluidWidthContainer",
	align: false,
	padding: 1,
	stretch: false
}

FluidWidthContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	align: PropTypes.bool,
	padding: PropTypes.number,
	stretch: PropTypes.bool,
	containerClassName: PropTypes.string
}

export default FluidWidthContainer

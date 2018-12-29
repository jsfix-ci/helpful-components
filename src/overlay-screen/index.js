import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

function OverlayScreen({
	children,
	containerClassName,
	backgroundColor,
	zIndex
}) {
	return (
		<Container
			className={containerClassName}
			backgroundColor={backgroundColor}
			zIndex={zIndex}>
			{children}
		</Container>
	)
}

OverlayScreen.defaultProps = {
	containerClassName: "OverlayScreen",
	zIndex: 100,
	backgroundColor: "#FFFFFF"
}

OverlayScreen.propTypes = {
	containerClassName: PropTypes.string,
	zIndex: PropTypes.number,
	backgroundColor: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default OverlayScreen

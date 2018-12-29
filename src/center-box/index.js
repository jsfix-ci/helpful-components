import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

function CenterBox({ children, containerClassName }) {
	return <Container className={containerClassName}>{children}</Container>
}

CenterBox.propTypes = {
	containerClassName: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

CenterBox.defaultProps = {
	containerClassName: "CenterBox"
}

export default CenterBox

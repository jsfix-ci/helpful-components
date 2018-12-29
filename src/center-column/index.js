import React from "react"
import PropTypes from "prop-types"
import { Container } from "./elements"

function CenterColumn({ children, containerClassName }) {
	return <Container className={containerClassName}>{children}</Container>
}

CenterColumn.defaultProps = {
	containerClassName: "CenterColumn"
}

CenterColumn.propTypes = {
	containerClassName: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CenterColumn

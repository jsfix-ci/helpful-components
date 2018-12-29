import React from "react"
import PropTypes from "prop-types"

function LocalizedTimeString({ time, format }) {
	return new Date(time).toLocaleTimeString([], format)
}

LocalizedTimeString.propTypes = {
	time: PropTypes.string.isRequired,
	format: PropTypes.object
}

LocalizedTimeString.defaultProps = {
	format: {
		hour: "2-digit",
		minute: "2-digit"
	}
}

export default LocalizedTimeString

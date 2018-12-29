import React from "react"
import PropTypes from "prop-types"

function LocalizedDateString({ date }) {
	return new Date(date).toLocaleDateString()
}

LocalizedDateString.propTypes = {
	date: PropTypes.string.isRequired
}

export default LocalizedDateString

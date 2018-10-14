import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"

class DataController extends React.Component {
	static propTypes = {
		loadData: PropTypes.func.isRequired,
		unloadData: PropTypes.func,
		data: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.object),
			PropTypes.object
		]).isRequired,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		renderWithoutData: PropTypes.func,
		renderWithData: PropTypes.func
	}
	componentWillUnmount() {
		const { unloadData } = this.props
		if (_.isFunction(unloadData)) {
			unloadData()
		}
	}
	componentDidMount() {
		const { loadData } = this.props
		const dataLoaded = this.dataLoaded()
		if (!dataLoaded) {
			loadData()
		}
	}
	dataLoaded = () => {
		const { data } = this.props
		// Set the default flag to false.
		var hasEmpty = false
		if (_.isArray(data)) {
			// check if its an empty array
			if (_.isEmpty(data)) {
				hasEmpty = true
			}
			// If it's an array of objects, check if each one is empty.
			data.forEach((obj) => {
				// If we already found an empty one, exit this test.
				if (hasEmpty === true) {
					return
				}
				// If we find an empty one set the flag to true.
				if (_.isEmpty(obj)) {
					hasEmpty = true
				}
			})
			// If its an object, test if it's empty
		} else if (_.isObject(data)) {
			// If it's an empty object, set the flag to true.
			if (_.isEmpty(data)) {
				hasEmpty = true
			}
		}
		// If hasEmpty is false, return ture that data is loaded.
		if (hasEmpty === false) {
			return true
		}
	}
	render() {
		const { children, renderWithoutData, renderWithData } = this.props
		const dataLoaded = this.dataLoaded()
		if (!dataLoaded) {
			if (_.isFunction(renderWithoutData)) {
				return renderWithoutData()
			} else {
				return null
			}
		} else {
			if (_.isFunction(renderWithData)) {
				return renderWithData()
			} else {
				return children
			}
		}
	}
}

export default DataController

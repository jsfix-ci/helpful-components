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
		var dataEmpty = true
		if (_.isArray(data)) {
			dataEmpty = data.every((obj) => {
				return _.isEmpty(obj)
			})
		} else if (_.isObject(data)) {
			dataEmpty = _.isEmpty(data)
		}
		if (dataEmpty) {
			return false
		} else {
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

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
		render: PropTypes.func
	}
	componentWillUnmount() {
		const { unloadData } = this.props
		if (_.isFunction(unloadData)) {
			unloadData()
		}
	}
	componentDidMount() {
		const { loadData } = this.props
		const dataEmpty = this.dataEmpty()
		if (dataEmpty) {
			loadData()
		}
	}
	dataEmpty = () => {
		const { data } = this.props
		if (_.isObject(data)) {
			return _.isEmpty(data)
		}
		if (_.isArray(data)) {
			return data.every((obj) => {
				if (_.isObject(obj)) {
					return _.isEmpty(obj)
				}
				throw new Error("Data item is not an object")
			})
		}
		throw new Error("Data must be an object or an array of objects")
	}
	render() {
		const { children, render } = this.props
		const dataEmpty = this.dataEmpty()
		if (dataEmpty) {
			return null
		} else {
			if (_.isFunction(render)) {
				return render()
			} else {
				return children
			}
		}
	}
}

export default DataController

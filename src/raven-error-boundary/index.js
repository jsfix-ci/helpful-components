import React from "react"
import PropTypes from "prop-types"
import Raven from "raven-js"
import _ from "underscore"
import { Container } from "./elements"

class RavenErrorBoundary extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired,
		render: PropTypes.func,
		isEnvironment: PropTypes.bool.isRequired
	}
	state = {
		error: null
	}
	componentDidCatch(error, errorInfo) {
		const { isEnvironment } = this.props
		if (isEnvironment) {
			this.setState({ error })
			Raven.captureException(error, {
				extra: errorInfo
			})
		}
	}
	handleClick = () => {
		Raven.lastEventId() && Raven.showReportDialog()
	}
	render() {
		const { isEnvironment, children, render } = this.props
		const { error } = this.state
		const handleClick = this.handleClick
		if (isEnvironment && error) {
			if (_.isFunction(render)) {
				return render(handleClick)
			} else {
				return (
					<Container onClick={handleClick}>
						Oops, something went wrong.
					</Container>
				)
			}
		} else {
			return children
		}
	}
}

export default RavenErrorBoundary

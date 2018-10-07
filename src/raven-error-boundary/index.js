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
		render: PropTypes.func
	}
	state = {
		error: null,
		isProduction: !!(process.env.NODE_ENV === "production")
	}
	componentDidCatch(error, errorInfo) {
		const { isProduction } = this.state
		if (isProduction) {
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
		const { isProduction, error } = this.state
		const { children, render } = this.props
		const handleClick = this.handleClick
		if (isProduction && error) {
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

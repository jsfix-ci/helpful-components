import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

function toggledComponent(AuthenticatedComponent, AnonymousComponent) {
	class ToggledComponent extends React.Component {
		static propTypes = {
			isAuthenticated: PropTypes.bool.isRequired
		}
		render() {
			const { isAuthenticated } = this.props
			return isAuthenticated ? (
				<AuthenticatedComponent {...this.props} />
			) : (
				<AnonymousComponent {...this.props} />
			)
		}
	}

	const mapStateToProps = (state) => {
		return {
			isAuthenticated: state.auth.isAuthenticated
		}
	}

	return connect(mapStateToProps)(ToggledComponent)
}

export default toggledComponent

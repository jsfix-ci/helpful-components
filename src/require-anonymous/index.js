import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { push } from "connected-react-router"

function requireAnonymous(Component, path) {
	class RequireAnonymousComponent extends React.Component {
		static propTypes = {
			dispatch: PropTypes.func.isRequired,
			isAuthenticated: PropTypes.bool.isRequired,
			path: PropTypes.string.isRequired
		}
		componentWillMount() {
			this.checkAuthentication()
		}
		componentWillReceiveProps(nextProps) {
			this.checkAuthentication()
		}
		checkAuthentication = () => {
			const { isAuthenticated, dispatch, path } = this.props
			if (isAuthenticated) {
				dispatch(push(path))
			}
		}
		render() {
			const { isAuthenticated } = this.props
			return isAuthenticated === false ? <Component {...this.props} /> : null
		}
	}

	const mapStateToProps = (state) => {
		return {
			isAuthenticated: state.auth.isAuthenticated
		}
	}

	return connect(mapStateToProps)(RequireAnonymousComponent)
}

export default requireAnonymous

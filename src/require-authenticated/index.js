import React from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import PropTypes from "prop-types"

function requireAuthenticated(Component, path) {
	class RequireAuthenticatedComponent extends React.Component {
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
				return
			}
			dispatch(push(path))
		}
		render() {
			const { isAuthenticated } = this.props
			return isAuthenticated === true ? <Component {...this.props} /> : null
		}
	}

	const mapStateToProps = (state) => {
		return {
			isAuthenticated: state.auth.isAuthenticated
		}
	}

	return connect(mapStateToProps)(RequireAuthenticatedComponent)
}

export default requireAuthenticated

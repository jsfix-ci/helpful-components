import React from "react"
import PropTypes from "prop-types"
import ReactGA from "react-ga"

class GoogleAnalytics extends React.Component {
	static propTypes = {
		location: PropTypes.object.isRequired,
		environmentName: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		emitter: PropTypes.object.isRequired
	}
	state = {
		modalviewToken: null,
		pageviewToken: null,
		eventToken: null,
		timingToken: null
	}
	addListeners = () => {
		const { emitter } = this.props
		// Add global listeners for different events.
		const modalviewToken =
			this.state.modalviewToken ||
			emitter.addListener("GOOGLE_ANALYTICS_MODAL_VIEW", (modalName) => {
				this.modalview(modalName)
			})
		const pageviewToken =
			this.state.pageviewToken ||
			emitter.addListener("GOOGLE_ANALYTICS_PAGE_VIEW", (path) => {
				this.pageview(path)
			})
		const eventToken =
			this.state.eventToken ||
			emitter.addListener("GOOGLE_ANALYTICS_EVENT", (opts) => {
				this.event(opts)
			})
		const timingToken =
			this.state.timingToken ||
			emitter.addListener("GOOGLE_ANALYTICS_TIMING", (opts) => {
				this.timing(opts)
			})
		this.setState({
			modalviewToken: modalviewToken,
			pageviewToken: pageviewToken,
			eventToken: eventToken,
			timingToken: timingToken
		})
	}
	removeListeners = () => {
		const {
			modalviewToken,
			pageviewToken,
			eventToken,
			timingToken
		} = this.state
		if (modalviewToken) {
			modalviewToken.remove()
		}
		if (pageviewToken) {
			pageviewToken.remove()
		}
		if (eventToken) {
			eventToken.remove()
		}
		if (timingToken) {
			timingToken.remove()
		}
	}
	componentWillUnmount() {
		this.removeListeners()
	}
	componentDidMount() {
		// initialize google analytics on the page.
		this.initialize()
		// add event listeners for each google analytics method
		this.addListeners()
	}
	componentDidUpdate(prevProps, prevState) {
		this.pageviewForLocation()
	}
	pageviewForLocation = () => {
		// post analytics for each page view change.
		const { location } = this.props
		const path = location.pathname + location.search
		this.pageview(path)
	}
	isProductionEnvironment = () => {
		// return true if the environment name is production.
		const { environmentName } = this.props
		if (environmentName === "production") {
			return true
		}
	}
	modalview = (modalName) => {
		if (this.isProductionEnvironment()) {
			ReactGA.modalview(modalName)
		}
	}
	event = (opts) => {
		if (this.isProductionEnvironment()) {
			ReactGA.event(opts)
		}
	}
	timing = (opts) => {
		if (this.isProductionEnvironment()) {
			ReactGA.timing(opts)
		}
	}
	pageview = (path) => {
		if (this.isProductionEnvironment()) {
			ReactGA.pageview(path)
		}
	}
	initialize = () => {
		if (this.isProductionEnvironment()) {
			const { id } = this.props
			ReactGA.initialize(id)
		}
	}
	render() {
		return null
	}
}

export default GoogleAnalytics

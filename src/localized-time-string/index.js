import React from "react"
import PropTypes from "prop-types"

class LocalizedTimeString extends React.Component {
    static propTypes = {
        time: PropTypes.string.isRequired
    };
    render() {
        const {
            time
        } = this.props
        return new Date(time).toLocaleTimeString([], {
            "hour": "2-digit",
            "minute": "2-digit"
        })
    }
}

export default LocalizedTimeString
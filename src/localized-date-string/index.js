import React from "react"
import PropTypes from "prop-types"

class LocalizedDateString extends React.Component {
    static propTypes = {
        date: PropTypes.string.isRequired
    };
    render() {
        const {
            date
        } = this.props
        return new Date(date).toLocaleDateString()
    }
}

export default LocalizedDateString
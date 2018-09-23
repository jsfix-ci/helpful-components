import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons"
import {
    Container
} from "./elements"

class LoadingScreen extends React.Component {
    static propTypes = {
        icon: PropTypes.object,
        iconSize: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        backgroundColor: PropTypes.string,
        zIndex: PropTypes.number
    };
    static defaultProps = {
        icon: faCircleNotch,
        iconSize: 2,
        zIndex: 1000,
        backgroundColor: "#FFFFFF",
    };
    render() {
        const {
            icon,
            iconSize,
            backgroundColor,
            zIndex,
        } = this.props
        var iconSizeString = iconSize
        if(_.isNumber(iconSizeString)){
            iconSizeString = (iconSizeString.toString() + "x")
        }
        return (
            <Container
                backgroundColor={backgroundColor}
                zIndex={zIndex}>
                <FontAwesomeIcon
                    icon={icon}
                    size={iconSizeString}
                    spin
                />
            </Container>
        );
    }
}

export default LoadingScreen
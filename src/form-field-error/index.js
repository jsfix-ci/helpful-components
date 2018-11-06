import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import {
	Container,
	TextContainer,
	Text,
	CaretContainer,
	Caret
} from "./elements"

class FormFieldError extends React.Component {
	static propTypes = {
		isVisible: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
		textStyle: PropTypes.object,
		bodyStyle: PropTypes.object,
		onClick: PropTypes.func,
		containerClassName: PropTypes.string
	}
	static defaultProps = {
		containerClassName: "FormFieldError",
		bodyStyle: {
			zIndex: 100
		},
		textStyle: {
			backgroundColor: "red",
			color: "white",
			padding: "0.333em",
			borderRadius: "0.333em"
		},
		onClick: () => {}
	}
	render() {
		const {
			message,
			position,
			textStyle,
			bodyStyle,
			onClick,
			isVisible,
			containerClassName
		} = this.props
		var caretStyle = null
		if (position == "left") {
			caretStyle = {
				borderLeftColor: textStyle.backgroundColor
			}
		}
		if (position == "right") {
			caretStyle = {
				borderRightColor: textStyle.backgroundColor
			}
		}
		if (position == "top") {
			caretStyle = {
				borderTopColor: textStyle.backgroundColor
			}
		}
		if (position == "bottom") {
			caretStyle = {
				borderBottomColor: textStyle.backgroundColor
			}
		}
		return isVisible ? (
			<Container
				className={containerClassName}
				position={position}
				onClick={onClick}
				style={bodyStyle}>
				<CaretContainer>
					<Caret position={position} style={caretStyle} />
				</CaretContainer>
				<TextContainer>
					<Text style={textStyle}>{message}</Text>
				</TextContainer>
			</Container>
		) : null
	}
}

export default FormFieldError

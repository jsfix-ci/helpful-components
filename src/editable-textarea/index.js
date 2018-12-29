import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"

import {
	Container,
	Textarea,
	ButtonsContainer,
	ButtonsDivider,
	SubmitButton,
	CancelButton
} from "./elements"

class EditableTextarea extends React.Component {
	static propTypes = {
		containerClassName: PropTypes.string,
		defaultValue: PropTypes.string,
		submitButtonStyle: PropTypes.object,
		onClickSubmitButton: PropTypes.func.isRequired,
		cancelButtonStyle: PropTypes.object,
		onClickCancelButton: PropTypes.func.isRequired,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
		placeholder: PropTypes.string,
		submitButtonBody: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		cancelButtonBody: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		])
	}
	static defaultProps = {
		containerClassName: "EditableTextarea",
		defaultValue: "",
		onFocus: (event) => {},
		onBlur: (event) => {},
		onChange: (event) => {},
		placeholder: "",
		submitButtonBody: "Submit",
		cancelButtonBody: "Cancel"
	}
	state = {
		value: ""
	}
	render() {
		const {
			containerClassName,
			defaultValue,
			submitButtonStyle,
			onClickSubmitButton,
			submitButtonBody,
			cancelButtonStyle,
			onClickCancelButton,
			cancelButtonBody,
			onFocus,
			onBlur,
			onChange,
			placeholder
		} = this.props
		const { value } = this.state
		return (
			<Container className={containerClassName}>
				<Textarea
					value={value}
					placeholder={placeholder}
					onFocus={(event) => {
						if (onFocus) {
							onFocus(event.target)
						}
					}}
					onBlur={(event) => {
						if (onBlur) {
							onBlur(event.target)
						}
					}}
					onChange={(event) => {
						this.setState({ value: event.target.value }, () => {
							if (onChange) {
								onChange(event.target, event.target.value)
							}
						})
					}}
					defaultValue={defaultValue}
				/>
				<ButtonsContainer>
					<SubmitButton
						style={submitButtonStyle}
						onClick={(event) => {
							if (_.isEmpty(value)) {
								return
							}
							if (_.isFunction(onClickSubmitButton)) {
								onClickSubmitButton(value)
							}
						}}>
						{submitButtonBody}
					</SubmitButton>
					<ButtonsDivider />
					<CancelButton
						style={cancelButtonStyle}
						onClick={() => {
							if (_.isFunction(onClickCancelButton)) {
								onClickCancelButton()
							}
						}}>
						{cancelButtonBody}
					</CancelButton>
				</ButtonsContainer>
			</Container>
		)
	}
}

export default EditableTextarea

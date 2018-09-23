import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons"
import {
    Container,
    Textarea,
    ButtonsContainer,
    ButtonsDivider,
    SubmitButton,
    CancelButton,
} from "./elements"

class EditableTextarea extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        submitButtonStyle: PropTypes.object,
        onClickSubmitButton: PropTypes.func.isRequired,
        exitButtonStyle: PropTypes.object,
        onClickExitButton: PropTypes.func.isRequired
    };
    static defaultProps = {
        defaultValue: ""
    };
    constructor(props){
        super(props)
        this.TEXTAREA = null
    }
    render() {
        const {
            defaultValue,
            submitButtonStyle,
            onClickSubmitButton,
            exitButtonStyle,
            onClickExitButton,
        } = this.props
        return (
            <Container>
                <Textarea
                    innerRef={(el) => { this.TEXTAREA = el }}
                    defaultValue={defaultValue}/>
                <ButtonsContainer>
                    <SubmitButton
                        style={submitButtonStyle}
                        onClick={(event) => {
                            const value = this.TEXTAREA.value
                            if(_.isEmpty(value)){
                                return
                            }
                            if(_.isFunction(onClickSubmitButton)){
                                onClickSubmitButton(value)
                            }
                        }}>
                        <FontAwesomeIcon
                            icon={faCheck}/>
                    </SubmitButton>
                    <ButtonsDivider/>
                    <CancelButton
                        style={cancelButtonStyle}
                        onClick={() => {
                            if(_.isFunction(onClickCancelButton)){
                                onClickCancelButton()
                            }
                        }}>
                        <FontAwesomeIcon
                            icon={faTimes}
                        />
                    </CancelButton>
                </ButtonsContainer>
            </Container>
        );
    }
}

export default EditableTextarea
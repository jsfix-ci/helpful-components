import styled from "react-emotion"
import {css} from "emotion"

export const Container = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    ${props => props.position == "left" && css`
        top: 0;
        right: 100%;
        flex-direction: row-reverse;
        & ${Body} {
            flex-direction: row-reverse;
        }
    `}
    ${props => props.position == "right" && css`
        top: 0;
        left: 100%;
    `}
    ${props => props.position == "top" && css`
        left: 50%;
        transform: translate(-50%);
        top: -100%;
        flex-direction: column-reverse;
    `}
    ${props => props.position == "bottom" && css`
        left: 50%;
        transform: translate(-50%);
        bottom: -100%;
        flex-direction: column;
    `}
    ${props => props.position == "center" && css`
        top: 0;
        left: 0;
    `}
`

export const CaretContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Caret = styled.div`
    width: 0;
    height: 0;
    ${props => props.position == "left" && css`
        border-top: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
        border-right: 0.5em solid green;
        margin-right: -0.1em;
    `}
    ${props => props.position == "right" && css`
        border-top: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
        border-left: 0.5em solid green;
        margin-left: -0.1em;
    `}
    ${props => props.position == "top" && css`
        border-left: 0.5em solid transparent;
        border-right: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
    `}
    ${props => props.position == "bottom" && css`
        border-left: 0.5em solid transparent;
        border-right: 0.5em solid transparent;
        border-top: 0.5em solid transparent;
    `}
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.div`
    white-space: nowrap;
`
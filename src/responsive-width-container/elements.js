import styled from "@emotion/styled"
import {css} from "@emotion/core"

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    @media all and (max-width: 599px) {
        width: 384px;
    }
    @media all and (min-width: 600px) {
    }
    @media all and (min-width: 900px) {
        width: 768px;
    }
    @media all and (min-width: 1200px) {
        width: 1152px;
    }
    @media all and (min-width: 1800px) {
        width: 1536px;
    }
    ${props => props.align && css`
        display: flex;
        justify-content: center;
        & > * {
            width: 100%;
        }
    `}
`
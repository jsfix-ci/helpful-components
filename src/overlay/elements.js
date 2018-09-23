import styled from "react-emotion"

export const Container = styled.div`
    position: relative;
    height: 100%;
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor};
`
import styled from "react-emotion"

export const Container = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 0.333em;
    border: 1px solid #ccc;
    display: flex;
`

export const Textarea = styled.textarea`
    resize: none;
    border: 0 none;
    padding: 0.333em;
`

export const ButtonsDivider = styled.hr`
    height: 1px;
    background-color: #ccc;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ccc;
    background-color: #eee;
`

export const SubmitButton = styled.button`
    padding: 0.333em;
    font-size: 0.8em;
    flex: 1 1 auto;
`

export const CancelButton = styled.button`
    padding: 0.333em;
    font-size: 0.8em;
    flex: 1 1 auto;
`

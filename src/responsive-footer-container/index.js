import React from "react"
import ReactDOM from "react-dom"
import {debounce} from "debounce"

class ResponsiveFooterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.FOOTER = null
        this.SIBLING = null
        this.handleResize = debounce(() => {
            this.checkForCollision()
        }, 500)
    }
    state = {
        collision: false
    }
    render() {
        const {
            children
        } = this.props
        const {
            collision
        } = this.state
        var i = 0;
        var a = React.Children.toArray(children)
        var c = React.Children.map(children, (child) => {
            var clone = null
            if((i+1) == a.length){
                if(collision){
                    clone = React.cloneElement(child, {
                        ref: (el) => { this.FOOTER = el },
                        style: { position: "relative" }
                    })
                }
                else {
                    clone = React.cloneElement(child, {
                        ref: (el) => { this.FOOTER = el },
                        style: {position: "absolute"}
                    })
                }
            }
            else {
                clone = React.cloneElement(child, {
                    ref: (el) => { this.SIBLING = el }
                })
            }
            i++
            return clone
        })
        return c
    }
    componentWillUnmount() {
        this.removeResizeListener()
    }
    componentDidMount() {
        this.addResizeListener()
        this.checkForCollision()
    }
    addResizeListener = () => {
        if(typeof window == "undefined"){ return }
        window.addEventListener("resize", this.handleResize, false)
    }
    removeResizeListener = () => {
        if(typeof window == "undefined"){ return }
        window.removeEventListener("resize", this.handleResize, false)
    }
    checkForCollision = () => {
        const footerEl = ReactDOM.findDOMNode(this.FOOTER)
        const footerRect = footerEl.getBoundingClientRect()
        const siblingEl = ReactDOM.findDOMNode(this.SIBLING)
        const siblingRect = siblingEl.getBoundingClientRect()
        if(siblingRect.bottom > footerRect.top){
            this.setState({
                collision: true
            })
        }
        else if (siblingRect.bottom === footerRect.top){
            this.setState({
                collision: false
            })
        }
    }
}

export default ResponsiveFooterContainer
import React from "react"

import RavenErrorBoundary from "./index"

function setup(isEnvironment, body) {
	return mount(
		<RavenErrorBoundary isEnvironment={isEnvironment}>
			<div className={"child"}>Test</div>
		</RavenErrorBoundary>
	)
}

describe("<RavenErrorBoundary/>", () => {
	test("renders an error message when environment is correct", () => {
		const wrapper = setup(true)
		wrapper.setState({ error: true })
		expect(wrapper.text()).toEqual("Oops, something went wrong.")
	})
	test("doesnt render an error message when environment is incorrect", () => {
		const wrapper = setup(false)
		wrapper.setState({ error: true })
		expect(wrapper.text()).toEqual("Test")
	})
})

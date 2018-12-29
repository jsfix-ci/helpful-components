import React from "react"

import ResponsiveWidthContainer from "./index"

function setup() {
	return mount(
		<ResponsiveWidthContainer align={true}>
			<div className={"child"}>Test</div>
		</ResponsiveWidthContainer>
	)
}

describe("<ResponsiveWidthContainer/>", () => {
	test("renders", () => {
		const wrapper = setup()
		expect(wrapper.find(".child")).toHaveLength(1)
	})
})

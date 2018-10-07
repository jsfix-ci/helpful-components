# Helpful Components

## Description

A collection of helpful components to aid in website building.

## Installation

```
npm install @alexseitsinger/helpful-components
```

or

```
yarn add @alexseitsinger/helpful-components
```

## Components

#### Center Box

A container that is vertically and horizontally centered in it's parent.

##### Props

-   children - (Node(s), Required) - The element(s) to insert into this one.

#### Center Column

A container that is horizontally centered with fluid width and height of it's parent.

##### Props

-   children - (Node(s), Required) - The element(s) to insert into this one.

#### Editable Textarea

A textarea that contains a submit and cancel button.

##### Props

-   defaultValue - (String, Optional) - The value to insert into the textarea before any other input gets entered.
-   submitButtonStyle - (Object, Optional) - The style to apply to the submit button.
-   onClickSubmitButton - (Function, Required) - The function to invoke when the submit button is clicked. Will be passed the value of the textarea.
-   cancelButtonStyle - (Object, Optional) - The style to apply to the cancel button.
-   onClickCancelButton - (Function, Required) - The function to invoke when the cancel button is clicked.

#### Fixed Top Header

A container thats fixed to the top, and spans the entire width. Will still provide its height to the sibling elements when positioning.

##### Props

-   children - (Node, Required) - The element(s) to insert inside this one.
-   size - (Number/String, Required) - The height of the header.
-   zIndex - (Number, Optional) - The zIndex to use for layering.

#### Fluid Width Container

A container that fills the width of its parent, fills the height of the parent, and applies padding.

##### Props

-   children - (Node, Required) - The element(s) to insert inside this container.
-   padding - (Number/String, Optional) - The amount of padding to use on the left and right sides.
-   align - (Boolean, Optional) - Center the content in the container.
-   stretchChild - (Boolean, Optional) - Force the child element to fill the width of the container.

#### Form Field Error

An error message that can appear on the left, right, top, bottom, or center of another input field. Must be contains within a relative positioned parent.

##### Props

-   isVisible - (Boolean, Required) - Determines if the error is displayed or not.
-   message - (String, Required) - The message to display when the error is visible.
-   position - (String, Required) - The position, relative to the parent container, that the error will take when visible.
-   textStyle - (Object, Optional) - The style to apply to the text of the error.
-   bodyStyle - (Object, Optional) - The style to apply to the body of the error.
-   onClick - (Function, Optional) - The function to invoke when the error is clicked.

#### Loading Screen

A simple element that is layerd above the rest, and displays a spinner.

##### Props

-   icon - (Object, Optional) - The FontAwesome icon to display.
-   iconSize - (String/Number, Optional) - The size of the icon to display.
-   backgroundColor - (String, Optional) - The background color to use.
-   zIndex - (Number, Optional) - The layer to use with the loading screen.

#### Localized Date String

A component that converts a UTC timestamp string into a localized date string.

##### Props

-   date - (String, Required) - The timestamp string to convert.

#### Localized Time String

A component that converts a UTC timestamp string into a localized time string.

##### Props

-   time - (String, Required) - The timestamp string to convert.

#### Responsive Footer Container

A component that toggles the last element between relative and absolute positioning relative to its sibling element.

##### Props

-   children - (Node(s) / Required) - The element(s) to render within the container.

#### Responsive Width Container

A container that adjusts to a fixed width less than its breakpoint.

##### Props

-   children - (Node(s), Required) - The element(s) to insert inside this one.
-   align - (Boolean, Optional) - Force the sibling elements to be centered, and fill the width of this container.

#### requireAnonymous (HOC)

##### Arguments

-   Component - (Node, Required) - The component to render if isAuthenticated is false.
-   path - (String, Required) - The path to navigate to, using redux, if isAuthenticated is true.

#### requireAuthenticated (HOC)

##### Arguments

-   Component - (Node, Required) - The component to render if isAuthenticated is true.
-   path - (String, Required) - The path to navigate to, using redux, if isAuthenticated is false.

#### toggledComponent (HOC)

##### Arguments

-   AuthenticatedComponent - (Node, Required) - The component to render if isAuthenticated is True.
-   AnonymousComponent - (Node, Required) - The component to render if isAuthenticated is false.

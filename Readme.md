<p align="center">
    <img alt="React Gridizer Logo" width="168" src="https://raw.githubusercontent.com/Farshad-Hasanpour/react-bidimensional-grid-system/master/logo.svg">
</p>

# React-Gridizer
A simple-to-use and lightweight React grid package for creating responsive applications

## Examples
For more examples [click to visit CodeSandbox]()

Basic example:
```typescript jsx
<Row>
    <Col cols={12} sm={6} md={4} lg="3" xl={2}>
        First
    </Col>
    <Col cols="unset">
        Second
    </Col>
    <Col>
        Third
    </Col>
</Row>
```

## Installation
`yarn add react-gridizer`  
or  
`npm install react-gridizer`

## Usage
Import styles:  
`import 'react-gridizer/lib/index.css';`  
Since each imported CSS class has a prefix, you don't have to worry about any interference.

Import required modules to use them:  
`import {Row, Col, Spacer, useBreakpoints} from 'react-gridizer';`

## Features
✔ Simple-to-use responsive components  
✔ No CSS flex knowledge is required to use this package.  
✔ Lightweight (28KB in total)  
✔ Prefixed CSS classes to prevent style interference  
✔ Support for Typescript  
✔ Support for RTL  
✔ kebab-case props  
✔ Customizable HTML tags  
✔ `useBreakpoints` hook for listening to screen resize and breakpoint changes  
✔ `Spacer` component to distribute remaining width  
✔ bootstrap-like `Col` in `Row` structure

## API
this package exports the following modules. **Notice all props are optional**.

### Row
`Row` component is a flex container which means it's a wrapper for `Col`. In addition to all common HTML attributes like tabIndex, aria attributes, events, and ... it supports the following props:

| Row Prop | Default | Description
| :-----------: | :-----------: | :----------- |
| tag | `'div'` | The HTML tag for `Row`. Some examples are `div`, `ul`, and `span`
| children | | The content of `Row`. It is recommended to use `Col` components inside `Row`
| className | | Adds extra custom classes to `Row`
| class | | Another way of adding extra classes to `Row`. It is the same as className.
| reverse | `false` | Reverses the order of items inside `Row`. Possible values are `true` and `false`
| gutters | `'normal'` | Determines padding for each `Col` inside `Row`. possible values are `'normal'`, `'dense'` and `'none'`.
| justify | | Determines the horizontal position of items inside `Row` (sets `justify-content` CSS property). Possible Values are `'center'`, `'end'`, `'left'`, `'right'`, `'space-around'`, `'space-between'`, `'space-evenly'`, `'start'` and `'stretch'`
| justify-sm | | Same as justify but for small screens and upper
| justify-md | | Same as justify but for medium screens and upper
| justify-lg | | Same as justify but for large screens and upper
| justify-xl | | Same as justify but for extra-large screens and upper
| align | | Determines the vertical position of each item inside `Row` (sets `align-items` CSS property). Possible Values are `'baseline'`, `'center'`, `'end'`, `'start'` and `'stretch'`
| align-sm | | Same as align but for small screens and upper
| align-md | | Same as align but for medium screens and upper
| align-lg | | Same as align but for large screens and upper
| align-xl | | Same as align but for extra-large screens and upper
| align-content | | Determines the vertical position of all items inside `Row` as a group (sets `align-content` CSS property). Possible Values are `'baseline'`, `'center'`, `'end'`, `'space-around'`, `'space-between'`, `'space-evenly'`, `'start'` and `'stretch'`
| align-content-sm | | Same as align-content but for small screens and upper
| align-content-md | | Same as align-content but for medium screens and upper
| align-content-lg | | Same as align-content but for large screens and upper
| align-content-xl | | Same as align-content but for extra-large screens and upper

### Col
`Col` component is a flex item which means it should be used inside `Row`. In addition to all common HTML attributes like tabIndex, aria attributes, events, and ... it supports the following props:

| Col Prop | Default | Description
| :-----------: | :-----------: | :----------- |
| tag | `'div'` | The HTML tag for `Col`. Some examples are `div`, `li`, and `h3`
| children | | The content of `Col`.
| className | | Adds extra custom classes to `Col`
| class | | Another way of adding extra classes to `Col`. It is the same as className.
| cols | | Determines the width of `Col` inside `Row` (sets `flex-basis` and `max-width` CSS properties). Possible Values are `'auto'`, `'unset'` or a number from 1 to 12. `'unset'` items fit the content and `'auto'` items fill the remaining space.
| sm | | Same as cols but for small screens and upper
| md | | Same as cols but for medium screens and upper
| lg | | Same as cols but for large screens and upper
| xl | | Same as cols but for extra-large screens and upper
| order | | Determines the order of `Col` inside `Row` (sets `order` CSS property). The minimum valid number is 1 and the maximum is 12.
| order-sm | | Same as order but for small screens and upper
| order-md | | Same as order but for medium screens and upper
| order-lg | | Same as order but for large screens and upper
| order-xl | | Same as order but for extra-large screens and upper
| offset | | Determines the start margin of `Col` in a way that each number is multiplied by 4px (sets `margin-inline-start` CSS property). The minimum valid number is 1 and the maximum is 11.
| offset-sm | | Same as offset but for small screens and upper
| offset-md | | Same as offset but for medium screens and upper
| offset-lg | | Same as offset but for large screens and upper
| offset-xl | | Same as offset but for extra-large screens and upper
| align-self | | Determines the vertical position of `Col` item inside `Row` (sets `align-self` CSS property). Possible Values are `'auto'`, `'baseline'`, `'center'`, `'end'`, `'start'` and `'stretch'`
| align-self-sm | | Same as align-self but for small screens and upper
| align-self-md | | Same as align-self but for medium screens and upper
| align-self-lg | | Same as align-self but for large screens and upper
| align-self-xl | | Same as align-self but for extra-large screens and upper

### Spacer
`Spacer` component can be used to distribute the remaining width in a row, for example, Placing `Spacer` between two `Col`s will push them to the sides. In addition to all common HTML attributes like tabIndex, aria attributes, events, and ... it supports the following props:

| Spacer Prop | Default | Description
| :-----------: | :-----------: | :----------- |
| tag | `'div'` | The HTML tag for `Spacer`. Some examples are `div`, `span`, and `li`
| children | | The content of `Spacer`.
| className | | Adds extra custom classes to `Spacer`
| class | | Another way of adding extra classes to `Spacer`. It is the same as className.

### useBreakpoints
this hook listens to screen size changes and exports screen width as well as active breakpoints. `useBreakpoints` has no parameter to set.

```js
return {
    width: width,
    xsOnly: width < 600,
    smOnly: width >= 600 && width < 960,
    smAndDown: width < 960,
    smAndUp: width >= 600,
    mdOnly: width >= 960 && width < 1280 - 16,
    mdAndDown: width < 1280 - 16,
    mdAndUp: width >= 960,
    lgOnly: width >= 1280 - 16 && width < 1920 - 16,
    lgAndDown: width < 1920 - 16,
    lgAndUp: width >= 1280,
    xlOnly: width >= 1920 - 16,
}
```

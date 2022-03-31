# React-Gridizer
A simple-to-use React library to create responsive applications

## Installation
`yarn add react-gridizer`  
or  
`npm install react-gridizer`

## Usage
First import the css file:  
`import react-gridizer/index.css;`  

Then import required components and hooks to use them:  
`import {Row, Col, Spacer, useBreakpoints};`

## Features
✔ Simple-to-use responsive components  
✔ No `Flex` knowledge required  
✔ Lightweight (28KB in total)  
✔ Support for `Typescript`  
✔ Support for `RTL`  
✔ `kebab-case` props  
✔ Customizable html tags  
✔ `useBreakpoints` hook for listening to screen resize and breakpoint changes  
✔ `Spacer` component to distribute remaining width  
✔ bootstrap-like `Col` in `Row` structure

## API
this package exports the following components and hooks. **Notice all props are optional**.

#### Row
`Row` component is a flex container which means it's a wrapper for `Col`. In addition to all common html attributes like tabIndex, aria attributes, events and ... it supports the following props:

| Prop | Default | Description
| :-----------: | :-----------: | :----------- |
| tag | `'div'` | the html tag for `Row`. Some examples are `div`, `ul`, `span` and etc
| children | | the content of `Row`. It is recommended to use `Col` components inside `Row`
| className | | Adds extra custom classes to `Row`
| class | | Another way of adding extra classes to `Row`. It is same as className.
| reverse | false | Reverses the order of items inside `Row`
| gutters | `'normal'` | Determines padding for each `Col` inside `Row`. possible values are `'normal'`, `'dense'` and `'none'`.
| justify | | Horizontal position of items inside `Row` (sets justify-content css property). Possible Values are `'center'`, `'end'`, `'left'`, `'right'`, `'space-around'`, `'space-between'`, `'space-evenly'`, `'start'` and `'stretch'`
| justify-sm | | Same as justify but for small screens and upper
| justify-md | | Same as justify but for medium screens and upper
| justify-lg | | Same as justify but for large screens and upper
| justify-xl | | Same as justify but for extra large screens and upper
| align | | Vertical position of each item inside `Row` (sets align-items css property). Possible Values are `'baseline'`, `'center'`, `'end'`, `'start'` and `'stretch'`
| align-sm | | Same as align but for small screens and upper
| align-md | | Same as align but for medium screens and upper
| align-lg | | Same as align but for large screens and upper
| align-xl | | Same as align but for extra large screens and upper
| align-content | | Vertical position of all items inside `Row` (sets align-content css property). Possible Values are `'baseline'`, `'center'`, `'end'`, `'space-around'`, `'space-between'`, `'space-evenly'`, `'start'` and `'stretch'`
| align-content-sm | | Same as align-content but for small screens and upper
| align-content-md | | Same as align-content but for medium screens and upper
| align-content-lg | | Same as align-content but for large screens and upper
| align-content-xl | | Same as align-content but for extra large screens and upper




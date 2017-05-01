# react-square-cards

## Introduction

An easy to use square card layout components for React.

## Installation

`$ install --save-dev react-square-cards`

## Usage

Here is a simple example.

```
"use strict";
import React from 'react';
import ReactSquareCards from 'react-square-cards';

// Let's use lorem ipsum text to generate content for many cards
const cardContents = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.").split(' ');

const MainView = (props) => (
	<ReactSquareCards.Wrap>
		{cardContents.map( (entry, i) => (
			<ReactSquareCards.Card key={`card-${i}`}>{entry}</ReactSquareCards.Card>
		))}
	</ReactSquareCards.Wrap>
);

export default MainView;
```

## Example

Take a look at this page for an example:
http://wonilsuh.com/npm/react-square-cards/example-react/
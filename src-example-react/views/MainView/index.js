"use strict";

import React from 'react';
import ReactSquareCards from '../../../dist/js/index.js';

const cardContents = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	.split(' ')
;

class MainView extends React.Component {

	render(){
		return (
			<ReactSquareCards.WrapWithPackery>
				{cardContents.map( (content, contentId) => (<ReactSquareCards.Card key={contentId}>{content}</ReactSquareCards.Card>))}
			</ReactSquareCards.WrapWithPackery>
		);
	}
}

// const MainView = (props) => (
// 	<Packery
// 		className="react-square-cards-wrap"
// 		elementType={'div'}
// 		options={{
// 			itemSelector:'.react-square-card',
// 			columnWidth:'.react-square-card',
// 			transitionDuration:0
// 		}}
// 		disableImagesLoaded={false}
// 		updateOnEachImageLoad={false}
// 	>
// 		{cardContents.map( (entry, i) => (
// 			<ReactSquareCards.Card key={`card-${i}`}>{entry}</ReactSquareCards.Card>
// 		))}
// 	</Packery>
// )

export default MainView;
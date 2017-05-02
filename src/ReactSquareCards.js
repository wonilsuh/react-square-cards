"use strict";

import React from 'react';
import PackeryGen from 'react-packery-component';
// var Packery = PackeryGen(React);

import './react-square-cards.scss';

class Card extends React.Component{
	
	render(){
		return (
			<div className="react-square-card">
				<div className="react-square-card-inner">
					<div className="react-square-card-innerer">
						<div className="react-square-card-content">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// class WrapWithPackery extends React.Component{

// 	render(){
// 		return (
// 			<Packery
// 				className="react-square-cards-wrap"
// 				elementType={'div'}
// 				options={{
// 					itemSelector:'.react-square-card',
// 					columnWidth:'.react-square-card',
// 					transitionDuration:0
// 				}}
// 				disableImagesLoaded={false}
// 				updateOnEachImageLoad={false}
// 			>
// 				{this.props.children}
// 			</Packery>
// 		);
// 	}
// }

const Wrap = (props) => (
	<div className="react-square-cards-wrap">
		{props.children}
	</div>
)

const ReactSquareCards = {
	Wrap,
	// WrapWithPackery,
	// WrapWithPackeryGen:(React) => WrapWithPackery,
	Card
};

export default ReactSquareCards;

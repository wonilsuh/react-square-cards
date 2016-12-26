"use strict";

import React from 'react';

import './react-square-cards.scss';

const Wrap = (props) => (
	<div className="react-square-cards-wrap">
		{props.children}
	</div>
);

const Card = (props) => (
	<div className="react-square-card">
		<div className="react-square-card-inner">
			<div className="react-square-card-innerer">
				<div className="react-square-card-content">
					{props.children}
				</div>
			</div>
		</div>
	</div>
);

const ReactSquareCards = {
	Wrap,
	Card
};

export default ReactSquareCards;
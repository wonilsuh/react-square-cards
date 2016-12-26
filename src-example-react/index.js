"use strict";

import React from "react";
import ReactDOM from 'react-dom';
import MainView from './views/MainView';

window.mainApp = (function(app){

	app.init = function(targetEl){
		ReactDOM.render(
			<MainView/>,
			targetEl
		);
	}

	return app;
})(window.mainApp || {});

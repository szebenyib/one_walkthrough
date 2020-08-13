/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"one_walkthrough/test/integration/NavigationJourney"
	], function() {
		QUnit.start();
	});
});
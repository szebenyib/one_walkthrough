/*global QUnit, opaTest*/

sap.ui.define([
  "one_walkthrough/localService/mockserver",
  "sap/ui/test/opaQunit",
  "./pages/App"
], function(mockserver) {
  "use strict";
  QUnit.module("Navigation");
  opaTest("Vajon megnyílik a Hello dialógus?", function(Given, When, Then) {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "one_walkthrough"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});

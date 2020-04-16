sap.ui.define([
  "sap/ui/core/mvc/XMLView"
], function(XMLView) {
  "use strict";
  XMLView.create({
    viewName: "one_walkthrough.view.App"
  }).then(function(oView) {
    oView.placeAt("content");
  });
});
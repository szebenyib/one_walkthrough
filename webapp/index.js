sap.ui.define([
  "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
  "use strict";
  var oContainer = new ComponentContainer({
    name: "one_walkthrough",
    settings: {
      id: "walkthrough"
    },
    async: true
  });
  oContainer.placeAt("content");
});
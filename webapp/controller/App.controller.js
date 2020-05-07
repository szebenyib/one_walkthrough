sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function(Controller,
            MessageToast) {
  "use strict";
  return Controller.extend("", {
    onShowHello: function() {
      MessageToast.show("Hi!");
    }
  });
});
sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("one_walkthrough.controller.App", {
    onOpenDialog: function() {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});
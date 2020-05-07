sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function(Controller,
            MessageToast,
            JSONModel) {
  "use strict";
  return Controller.extend("", {
    onInit: function() {
      var oData = {
        recipient: {
          name: "world"
        }
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },
    onShowHello: function() {
      MessageToast.show("Hi!");
    }
  });
});
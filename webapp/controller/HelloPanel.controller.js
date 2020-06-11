sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
], function(Controller,
            MessageToast,
            Fragment) {
  "use strict";
  return Controller.extend("one_walkthrough.controller.HelloPanel", {
    onShowHello: function() {
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var oModel = this.getView().getModel("i18n");
      var oBundle = oModel.getResourceBundle();
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      MessageToast.show(sMsg);
    },
    onOpenDialog: function() {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});
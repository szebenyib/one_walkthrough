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
      var oView = this.getView();
      if (!this.byId("helloDialog")) {
        Fragment.load({
          id: oView.getId(),
          name: "one_walkthrough.view.HelloDialog"
        }).then(function (oDialog){
          oView.addDependent(oDialog);
          oDialog.open();
        });
      } else {
        this.byId("helloDialog").open();
      }
    }
  });
});
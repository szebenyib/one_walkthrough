sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function(Controller,
            MessageToast,
            JSONModel,
            ResourceModel) {
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
      var oI18nModel = new ResourceModel({
        bundleName: "one_walkthrough.i18n.i18n"
      });
      this.getView().setModel(oI18nModel, "i18n");
    },
    onShowHello: function() {
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var oModel = this.getView().getModel("i18n");
      var oBundle = oModel.getResourceBundle();
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      MessageToast.show(sMsg);
    }
  });
});
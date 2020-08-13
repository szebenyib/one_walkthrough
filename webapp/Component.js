sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
  "./controller/HelloDialog"
], function(
  UIComponent,
  JSONModel,
  ResourceModel,
  HelloDialog) {
  "use strict";
  return UIComponent.extend("one_walkthrough.Component", {
    metadata: {
      manifest: "json"
    },
    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
      var oData = {
        recipient: {
          name: "world"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);
      var oI18nModel = new ResourceModel({
        bundleName: "one_walkthrough.i18n.i18n"
      });
      this.setModel(oI18nModel, "i18n");
      // set dialog
      this._helloDialog = new HelloDialog(this.getRootControl());
      // create the views based on the url/hash
			this.getRouter().initialize();
    },
    exit: function() {
      this._helloDialog.destroy();
      delete this._helloDialog;
    },
    openHelloDialog: function() {
      this._helloDialog.open();
    }
  });
});
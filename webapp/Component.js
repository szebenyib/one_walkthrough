sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function(
  UIComponent,
  JSONModel,
  ResourceModel) {
  "use strict";
  return UIComponent.extend("one_walkthrough.Component", {
    metadata: {
      rootView: {
        "viewName": "one_walkthrough.view.App",
        "type": "XML",
        "async": true,
        "id": "app"
      }
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
    }
  })
});
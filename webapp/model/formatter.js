sap.ui.define([

], function() {
  "use strict";
  return {
    statusText: function(sStatus) {
      var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
      var sResult;
      switch(sStatus) {
        case "A":
          sResult = oResourceBundle.getText("invoiceStatusA");
          break;
        case "B":
          sResult = oResourceBundle.getText("invoiceStatusB");
          break;
        case "C":
          sResult = oResourceBundle.getText("invoiceStatusC");
          break;
        default:
          sResult = sStatus;
      }
      return sResult; 
    }
  }
})
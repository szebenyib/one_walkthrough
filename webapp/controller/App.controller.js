sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("", {
    onShowHello: function() {
      alert("Hi");
    }
  });
});
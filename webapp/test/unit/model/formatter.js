sap.ui.define([
  "one_walkthrough/model/formatter",
  "sap/ui/model/resource/ResourceModel"
], function(
  formatter,
  ResourceModel
) {
  "use strict";
  QUnit.module("Formatting functions", {
    beforeEach: function() {
      this._oResourceModel = new ResourceModel({
        bundleUrl: sap.ui.require.toUrl("one_walkthrough") +
        "/i18n/i18n.properties"
      });
    },
    afterEach: function() {
      this._oResourceModel.destroy();
    }
  });
  QUnit.test("Should return translated texts",
    function(assert) {
      var oModel = this.stub();
      oModel.withArgs("i18n").returns(this._oResourceModel);
      var oViewStub = {
        getModel: oModel
      };
      var oControllerStub = {
        getView: this.stub().returns(oViewStub)
      };
      var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);
      assert.strictEqual(
        fnIsolatedFormatter("A"),
        "New",
        "The long text for status A is correct"
      );
      assert.strictEqual(
        fnIsolatedFormatter("B"),
        "In Progress",
        "The long text for status B is correct"
      );
    }
  );
});
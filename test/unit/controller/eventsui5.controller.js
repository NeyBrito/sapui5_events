/*global QUnit*/

sap.ui.define([
	"treinaui5/eventosui5/controller/eventsui5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("eventsui5 Controller");

	QUnit.test("I should test the eventsui5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

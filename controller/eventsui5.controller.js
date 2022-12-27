sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("treinaui5.eventosui5.controller.eventsui5", {
            a: 1,
            b: true,

            onInit: function () {

            },            
            ligaDarNota: function (oEvent, y, z){
                // CAPTURAR RATING INDICATOR;
                var oRatingIndicator = this.byId("notas");
                oRatingIndicator.attachEvent("change", this.darNota);
                //VINCULAR FUNCAO 'DARNOTA' COM O EVENT CHANGE
            },
            desligaDarNota: function (oEvent, y, z){
                var oRatingIndicator = this.byId("notas");
                oRatingIndicator.detachEvent("change", this.darNota);
            },

            darNota: function(oEvent){
                var iNota = oEvent.getParameters().value;
                alert("Nota: " + iNota);
            }

        });
    });

jQuery.sap.declare("com.csw.iotui5v2.util.Formatter");

com.csw.iotui5v2.util.Formatter = {

    dateIso : function (value) {
		var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd HH:mm"});
		return oDateFormat.format(value, false);
    },

	temperatureValue : function (value) {
		return parseFloat(value).toFixed(1);
	},

	unitIcon : function (value) {
	    if(value === "°C") {
	        return "sap-icon://temperature";
	    } else {
	        return "sap-icon://umbrella";
	    }
	}

};
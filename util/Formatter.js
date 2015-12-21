jQuery.sap.declare("com.csw.iotui5v2.util.Formatter");

com.csw.iotui5v2.util.Formatter = {

    dateIso : function (value) {
    	if(value !== null && value !== undefined) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance(
			        {
			            pattern: "yyyy-MM-dd HH:mm"
			        }
			    );
			var formatted = oDateFormat.format(value, false);
			return formatted.toString();
    	}
    },

	temperatureValue : function (value) {
		return parseFloat(value).toFixed(1);
	},

	unitIcon : function (value) {
	    if(value === "°C") {
	        return "sap-icon://temperature";
	    } else if(value === "%RH") {
	        return "sap-icon://umbrella";
	    } else {
	        return "sap-icon://measuring-point";
	    }
	}

};
function validate() {
	var currentDate = new Date();
	var dateInput = new Date($("#birthday").val());
	if (dateInput <= currentDate) {
		alert ("Pickup Date must be either today or in the future.");
		return false;
	}

	var phoneNumber = $("#phone").val();
	if (isNaN(phoneNumber)) {
		alert ("Phone number is not valid or not in a valid format.");
		return false;
	} else {
		if (phoneNumber.length != 10) {
			alert ("Phone number is not valid or not in a valid format.");
			return false;
		}
	}

	var zip = $("#zip").val();
	if (isNaN(zip)) {
		alert ("Zip must be all numbers.");
	} else {
		if (zip.length != 5) {
			alert ("Zip code must be five digits.")
			return false;
		}
	}

}

function validateOnline() {
	var phoneNumber = $("#phone").val();
	if (phoneNumber.length == 0) return true;
	if (isNaN(phoneNumber)) {
		alert ("Phone number is not valid or not in a valid format.");
		return false;
	} else {
		if (phoneNumber.length != 10) {
			alert ("Phone number is not valid or not in a valid format.");
			return false;
		}
	}

	var zip = $("#zip").val();
	if (isNaN(zip)) {
		alert ("Zip must be all numbers.");
	} else {
		if (zip.length != 5) {
			alert ("Zip code must be five digits.")
			return false;
		}
	}

}

















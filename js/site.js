// Accommodation page
var divBackpackers = document.getElementById('backpackers');
var divMotels = document.getElementById('motels');
var divApartments = document.getElementById('apartments');
var divHotels = document.getElementById('hotels');




function showBackpackers() {
  divApartments.className = "hide";
	divMotels.className = "hide";
  divHotels.className = "hide";
	divBackpackers.className = "show";
}
function showApartments() {
	divApartments.className = "show";
	divMotels.className = "hide";
	divHotels.className = "hide";
	divBackpackers.className = "hide";
}

function showMotels() {
  divApartments.className = "hide";
	divMotels.className = "show";
	divHotels.className = "hide";
	divBackpackers.className = "hide";
}



function showHotels() {
  divApartments.className = "hide";
	divMotels.className = "hide";
	divBackpackers.className = "hide";
  divHotels.className = "show";
}


// Gallery
var images = new Array();
  var i = 0;

  images[0] = './image/gallery1.jpg';
  images[1] = './image/gallery2.jpg';
  images[2] = './image/gallery3.jpg';
  images[3] = './image/gallery4.jpg';
  images[4] = './image/gallery5.jpg';
  images[5] = './image/gallery6.jpg';
  images[6] = './image/gallery7.jpg';
  images[7] = './image/gallery8.jpg';
  images[8] = './image/gallery9.jpg';

  function showImages() {
    document.getElementById("img_first").src = images[i];
      i++;
      if (i == images.length) {
          i = 0;
      }
      setTimeout("showImages()",5000);
}
//Newsletter
function validateForm()
{
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var email = document.getElementById('email');
	var checkbox = document.getElementById('agree');

	var errors = "";

	if ( name.value.length === 0 )
	{
		errors = " Enter the Name please<br/>";
	}
	if ( surname.value.length === 0 )
	{
		errors += "Enter the Surname please!<br/>";
	}
	if ( email.value.length === 0 )
	{
		errors += "Enter E-mail please!<br/>";
	}

	if ( name.value.length < 3 )
	{
		errors += "Name must be at least 3 letter<br/>";
	}

	if ( surname.value.length < 5 )
	{
		errors += "Surname must be at least 5 letters<br/>";
	}


	if ( email.value.indexOf('@') < 1 ||  email.value.lastIndexOf('.') < 1 ) {
        errors += "There is no @ or . in your address<br/>";
	}

  if((email.value.indexOf(",")>=0)||(email.value.indexOf(";")>=0)||(email.value.indexOf(" ")>=0)){
      errors += "Not a valid e-mail address<br/>";
  }

	if ( checkbox.checked == false )
	{
		errors += "You must agree with terms</br>";
	}

	document.getElementById('error').innerHTML = errors;

	if ( errors == "" )
	{
		alert("Thank you for registration!");
	}
}

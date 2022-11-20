// OpenWeatherMap API
const api = 'dfb1a164b51065a993df2895289cd89f';
window.addEventListener('load',() => {
	let long;
	let lat;
	//Accessing Geolocation of User
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition((position)=> {
		//storing longitute and latitude in variables
		long = position.coors.longitude;
		lat = position.coords.latitude;
		});
	}
});
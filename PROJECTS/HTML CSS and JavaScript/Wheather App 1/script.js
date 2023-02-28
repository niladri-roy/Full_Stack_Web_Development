const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a28f785cfmsh988bda706672a51p181492jsn79bcc0f7c41f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dumdum', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
import axios from 'axios';

const unsplash = axios.create({
	baseURL: 'https://api.unsplash.com/',

	headers: {
		Authorization:
			'Client-ID 8986afad25c7842d63a68f201b849f495e53a9662a2237fa45cf0c55d1c4cac1'
	}
});

export default unsplash;

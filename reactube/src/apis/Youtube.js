import axios from "axios";

const KEY = "AIzaSyC__sRAtvUadDkJssNzoo81bPmAPyrJ8hE";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",

	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});

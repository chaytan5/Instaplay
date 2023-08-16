export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=30&key=${process.env.REACT_APP_YT_API_KEY}`;

export const YOUTUBE_SHORTS_API_URL = `https://youtube.googleapis.com/youtube/v3/shorts?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=30&key=${process.env.REACT_APP_YT_API_KEY}`;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25;

export const search_sugg = `https://youtube.googleapis.com/youtube/v3/search?part=hello&maxResults=25&q=surfing&key=${process.env.REACT_APP_YT_API_KEY}`;

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json"

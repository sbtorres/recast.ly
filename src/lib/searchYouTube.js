var searchYouTube = (options, callback, errorCB) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: callback,
    error: errorCB || function(error) {
      console.error('Failed to fetch messages', error);
    }
  });
};

// var option = {
//   q: 'cats',
//   order: 'relevance',
//   maxResults:  5,
//   key: 'AIzaSyD9eeqxLG5GZ4lDhTnAEs-Es8B6ECBszl4',
//   part: 'snippet'
// }

// var response = searchYouTube(option, (data) => console.log(data));


export default searchYouTube;

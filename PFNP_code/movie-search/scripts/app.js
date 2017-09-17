$('#movie-search-form').keyup(function(e) {
  e.preventDefault();
  $('.result').hide();
  var userSearchQuery = this.query.value;
  if (userSearchQuery.length > 2){
    searchOMDB(userSearchQuery);
  }
});

function searchOMDB(query) {
  $.getJSON('https://www.omdbapi.com/', {
    t: query,
    apikey: "c12529c3",
    plot: "short",
    r: 'json'
  }, function(omdbData) {
    if (omdbData.Response === "True"){
      
      renderMovie(omdbData)
      console.log(omdbData);
    } else {
      renderError();
      console.log(omdbData);
    }
  });
}

function renderMovie(omdbData) {
  console.log(omdbData);
  $('.result').show();
  $('#title').html(omdbData.Title);
  $('#year').html(omdbData.Year);
  $('#actors').html(omdbData.Actors);
  $("#plot").html(omdbData.Plot);
  $('#director').html(omdbData.Director)
  $('#poster').attr("src", omdbData.Poster);
  $('.error').hide();


}

function renderError() {
  $('.error').show();
}
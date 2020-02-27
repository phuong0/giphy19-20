/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', '#FFE400');
    $('h1').text('Giphy Up!');
});

$('#btn').click(function() {
    let userInput = $("#inputB").val();
    let url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            $("h2").empty();
            let v;
            for(v = 0; v < 5; v++){
                $("h2").append(`<p><img src="${data['data'][v]['images']['original']['url']}"><p>`);
            }
        })
})
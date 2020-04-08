//
// $(document).ready(function() {
//   var urls = ['/static/images/carousel/profile.png', "/static/images/carousel/EGR101.png", "/static/images/carousel/computer.png"];
//
//   var cout = 1;
//   $('.slide').css('background-image', 'url("' + urls[0] + '")');
//   $('img').attr('src', urls[0]);
//   $('#slide0').addClass("active");
//   setInterval(function() {
//     $('.slide').css('background-image', 'url("' + urls[cout] + '")');
//     $('img').attr('src', urls[cout]);
//     cout != 0 ? $('#slide0').removeClass("active") : $('#slide0').addClass("active") ;
//     cout != 1 ? $('#slide1').removeClass("active") : $('#slide1').addClass("active") ;
//     cout != 2 ? $('#slide2').removeClass("active") : $('#slide2').addClass("active") ;
//     $('#slide' + cout).addClass("active");
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 5000);
//
// });



$(document).ready(function() {
  var url = 0;
  var urls = ['/static/images/carousel/1.png', "/static/images/carousel/2.png", "/static/images/carousel/3.png"];



  $(".carousel-control-prev").click(function () {
    if (url == 0) {
      url = 3;
    }
    url--;
    $('.slide').css('background-image', 'url("' + urls[url] + '")');

  });

  $(".carousel-control-next").click(function () {
    if(url == 2) {
      url = -1;
    }
    url++;
    $('.slide').css('background-image', 'url("' + urls[url] + '")');
  });

});
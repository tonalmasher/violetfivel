$(document).ready(function(){
  $("#welcome").css("display", "flex").hide().fadeIn(2000);
  
  $(".gallery").on('click','.gallery-image', function(){
    let url = $(this).find('img').attr('src');
    $("#modal").css("display", "block");
    $("#modal-content").html("<img src='" + url + "' class='modal-img'>");
    $("body").css("overflow", "hidden");
  });
  
  $("#modal").on('click', function() {
    $(this).css("display", "none");
    $("body").css("overflow", "auto");
  });
  
})

$(".link-color").click(function(){
  $("section").hide();
  $("#section-color").css("display", "flex").hide().fadeIn(1000);
  $("#gallery-color").css("display", "flex").hide().fadeIn(3000);
  var folder = "../violetfivel/lib/images/color/";
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  $("#gallery-color").prepend( "<div class='col-6 col-lg-4 gallery-image slideUp'><img class='img-fluid rounded' src='"+ val +"'></div>" );
              } 
          });
      }
  });
});

$(".link-black").click(function(){
  $("section").hide();
  $("#section-blackwork").css("display", "flex").hide().fadeIn(1000);
  $("#gallery-blackwork").css("display", "flex").hide().fadeIn(3000);
  var folder = "../violetfivel/lib/images/blackwork/";
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  $("#gallery-blackwork").prepend( "<div class='col-6 col-lg-4 gallery-image slideUp'><img class='img-fluid rounded' src='"+ val +"'></div>" );
              } 
          });
      }
  });
});

$(".link-paintings").click(function(){
  $("section").hide();
  $("#section-paintings").css("display", "flex").hide().fadeIn(1000);
  $("#gallery-paintings").css("display", "flex").hide().fadeIn(3000);
  var folder = "../violetfivel/lib/images/paintings/";
  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  $("#gallery-paintings").prepend( "<div class='col-12 col-sm-6 col-lg-4 gallery-image slideUp'><img class='img-fluid' src='"+ val +"'></div>" );
              } 
          });
      }
  });
});

//for collapsing the navbar when in mobile mode

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
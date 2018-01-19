$(document).ready(function(){

  $("#welcome").css("display", "flex").hide().fadeIn(1000);

  $(".gallery").on('click','.gallery-image', function(){
    let url = $(this).find('img').attr('src');
    //    use a regex to select the end of the string to create the new path to load the larger image

    $("#image-modal").css("display", "block");
    $("#image-modal-content").html("<img src='" + url + "' class='modal-img'>");
    $("body").css("overflow", "hidden");
  });

  $("#image-modal").on('click', function() {
    $(this).css("display", "none");
    $("body").css("overflow", "auto");
  });

  $(".link-contact").click(function(){
    $("section").hide();
    $("#contact").css("display", "flex").hide().fadeIn(1000);
  })

  $(".link-color").click(function(){
    createGallery("color", 6);
  });

  $(".link-black").click(function(){
    createGallery("blackwork", 6);
  });

  $(".link-paintings").click(function(){
    createGallery("paintings", 12);
  });

  $("#welcome").click(function(){
    
    $("#welcome-image").toggleClass("welcome-image-dark").toggleClass("welcome-image-light");
    $("#welcome-nav").toggleClass("d-block");
  })

  //for collapsing the navbar when in mobile mode

  $('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

})

// Load thumbnails, then load full image if clicked.

// for the image click function (above) use a regex to select the end of the string to create the new path to load the larger image

// AJAX function to create gallery
var createGallery = function (name, size) {
  var section = "#section-" + name;
  var gallery = "#gallery-" + name;
  var folder = "lib/images/" + name + "/thumbs/";
  $("section").hide();
  $(section).css("display", "flex").hide().fadeIn(1000);
  $(gallery).css("display", "flex").hide().fadeIn(3000);
  $.ajax({
    url : folder,
    success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
        //            when on server you need to add "+ folder" before "+ val" below
        if( val.match(/\.(jpe?g|png|gif)$/) ) {
          //                  images.push(val);
          $(gallery).prepend( "<div class='col-" + size + " col-lg-4 gallery-image slideUp'><img class='img-fluid rounded' src='" + val + "'></div>" );
        } 
      });
    }
  });
}

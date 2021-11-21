$( ".share-button" ).click(function() {
    $(this).toggleClass("hoverbtnmorado");
    $(".iconos-redes").toggleClass("mostrar-redes");
    $(".infosharetext").toggleClass("ocultar-infoshare")
  });
  $( "#btn-info-modal" ).click(function() {
    $("#reposo").addClass("mostrartempo");
    $("#modal-info").addClass("movimientomodal");
  });

  $( ".modal-info_top svg" ).click(function() {
    $("#reposo").removeClass("mostrartempo");
    $("#modal-info").removeClass("movimientomodal");
  });

  $("#reposo").click(function() {
    $(this).removeClass("mostrartempo");
    $("#modal-info").removeClass("movimientomodal");
  });

  $('.top-btn-areas').slick({
    infinite: false,
    slidesToShow: 6,
    arrows: false,
    dots: false,
    draggable: true,
    variableWidth: true
  });
      
  $('.bottom-areas').slick({
    infinite: false,
    arrows: true,
    dots: true,
    draggable: true
  });

  $(".bottom-areas .slick-prev").html('<img src="./arrow-prev.png" width="15" alt="">');
  $(".bottom-areas .slick-next").html('<img src="./arrow-next.png" width="15" alt="">');
  $('.bottom-areas [role="presentation"] button').html("");
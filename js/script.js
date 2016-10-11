//SMOOTH SCROLL////////////////////////////////////////

$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//SUBSCRIPTION POPUP///////////////////////////////////

$(document).ready(function(event) {
  $('.subscribeButton').on('click', function(event) {
    event.preventDefault();
    var email = $('.email').val();
    var emailConfirm =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if ((email).match(emailConfirm)){
      alert('You shall not subscribe!(Please enter valid e-mail address)');
    }
    else {
      event.preventDefault();
      alert('Thank you for subscribing');
    }
});
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

$(".scrollup").fadeOut();

$(document).ready(function () {
  
  // setting for scroll(up) (down)

  $(function () {
    // On click on .scrollup
    $(".scrollup").click(function () {
      // switch to top of page
      $("html, body").animate({
        scrollTop: 0,
      },1000)
    });
  });

  // When scroll (window) - (down)
  $(window).scroll(function () {
    // If user scrolled page more than 200px
    if ($(this).scrollTop () > 300) {
      // Make a .scrollup fadein
      $(".scrollup").fadeIn();
    }
    // else fadeout .scrollup
    else {
      $(".scrollup").fadeOut();
    }
  });

// #link-home
// #link-features
// #link-project
// #link-service
// #link-contact

// animation for all link (down)
$('a').click(function(e){
  if($(this).attr('href').indexOf('#') != -1){ // Проверяем, является и ссылка действительно якорной ссылкой.
  e.preventDefault(); // Отменяем событие перехода.
        var href = $(this).attr('href').replace('#', ''); // Получаем из якорной ссылки нужный ID элемента, к которому будет происходить переход.
  
  if($('#'+href).length > 0){ // Проверяем, существует ли на странице нужный нам элемент.
          var tophref = $('body').find('#'+href).offset().top; // Получаем координаты элемента, относительно начала страницы.
          $('html, body').animate({scrollTop: tophref}, 800); // Создаём анимацию скрола к нужному элементу.
  }
}
});

// vaditation form (down)
  $("form").validate({
    errorElement: "div",
    errorClass: "error-massage",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
      },
      userPolicy: "required",
      userPhone: {
        required: true,
        maxlength: 17,
        minlength: 17,
       },
      userEmail:  {
        required: true,
        email: true,
      },
      userObject: "required",
      userMassage: {
        required: true,
        minlength: 100,
      }
    },
    messages: {
      userName: {
        required: "Please specify your name",
        minlength: " Not shorter than 2",
      },
      userPhone: "Phone required",
      userPolicy: "Agreement required",
      userEmail: {
        required: "Please specify email",
        email: "Example, name@gmail.com",
      },
      userMassage: {
        minlength: "Type more...",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "../telegram.php",
        data: $(form).serialize(),
        success: function (response) {
          alert("From has been sumbited!");
          $(form)[0].reset();
        }
      });
    }
  });

  // mask For form (phone) (down)
  $("[type=tel]").mask("+1 (000) 000-0000")

});
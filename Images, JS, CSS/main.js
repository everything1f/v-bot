/* ============= navbar white=========*/
$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".navbar-light").addClass('nav-white');
      }
      else {
        $(".navbar-light").removeClass('nav-white');
      }
    })
  });
  /* ============= Hero animation=========*/
  
  $(document).ready(function () {
    setTimeout(function () {
      $('.hero-shape').addClass('animate');
    }, 1000);
    setTimeout(function () {
      $('.main-particles').addClass('animate');
    }, 1500);
  });
  /* ============= Page load animation=========*/
  $('.animated').each(function () {
    $(this).appear(function () {
  
      var element = $(this);
  
      var animation = element.attr('data-animation');
      if (!element.hasClass('visible')) {
        var animationDelay = element.attr('data-animation-delay');
        setTimeout(function () {
          element.addClass(animation + ' visible');
        }, animationDelay
        );
      }
    });
  
  });
  
  
  /* ============= Panel Tab JS=========*/
  $(document).ready(function () {
    // Check for active class on page load
    $('.monitor-section .nav-link.active').each(function () {
      $(this).find('.panel').addClass('active');
    });
    // Handle click event
    $('.monitor-section .nav-link').on('click', function () {
      $('.panel').removeClass('active'); // Remove active class from all panels
      $(this).find('.panel').addClass('active'); // Add active class to clicked panel
    });
  });
  
  /* ============= Slider JS=========*/
  $(document).ready(function () {
    $('.roadmap-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      dots: false,
      speed: 300,
      centerPadding: '10px',
      infinite: false,
      speed: 2000,
  
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
  
      ],
    });
  });
  
  /* ============= Utility JS=========*/
  
  $(document).ready(function () {
    $("#contactForm").submit((e) => {
      e.preventDefault();
      var name = $("#contactForm input[name='name']").val();
      var email = $("#contactForm input[name='email']").val();
      var message = $("#contactForm textarea[name='message']").val();
      $.ajax({
        url: "https://app.magnum.trade/api/users/contact",
        type: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        success: function (data) {
          alert("Thank you for contacting us. We will get back to you soon.");
        }
      })
    })
  
    $("#subscriptionForm").submit((e) => {
      e.preventDefault();
      var email = $("#subscriptionForm input[type='text']").val();
      $.ajax({
        url: "https://app.magnum.trade/api/users/subscribe",
        type: "POST",
        data: {
          email: email
        },
        success: function (data) {
          alert("Thank you for subscribing to our newsletter.");
        }
      })
    })
  
    //copy to clipboard
    $("#copyCA").click(function () {
      debugger;
      var copyText = $("#caInput").val();
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(copyText.value);
    });
  });
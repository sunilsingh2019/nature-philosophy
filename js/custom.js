jQuery(document).ready(function ($) {
  if (!$('body').hasClass('homepage')) {
    $('link.homepage-only').remove();
  }
  //smooth scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var topSpacer = 60;

    if ($(".menu-cat-tab").length === 1) {
      if ($(window).width() < 1201) {
        var headerHeight = $(".header").height();
        var menuBarHeight = $(".menu-cat-tab-list").height();
        if (menuBarHeight == null) {
          menuBarHeight = 0;
        }
        topSpacer = headerHeight + menuBarHeight;
        console.log(headerHeight);
        console.log(menuBarHeight);
      }
    }

    if ($(".order").length === 1) {
      topSpacer = 90;
    }

    $("html, body")
      .stop()
      .animate({
          scrollTop: $($anchor.attr("href")).offset().top - topSpacer,
        },
        1500,
        "easeInOutExpo"
      );

    event.preventDefault();
  });

  //carousel init
  $("#carousel1").carousel({
    interval: 12000,
    pause: "false",
  });


  // $(".welcome-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   arrows: true,
  //   dots: false,
  //   autoplay: true,
  //   autoplaySpeed: 7000,
  // });

  $(".followus-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 7000,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="48.147" height="48.146" viewBox="0 0 48.147 48.146"> <g id="Group_1880" data-name="Group 1880" transform="translate(2160.633 -1434.252) rotate(180)"> <circle id="Ellipse_2" data-name="Ellipse 2" cx="23.573" cy="23.573" r="23.573" transform="translate(2112.987 -1481.899)" fill="none" stroke="#e55100" stroke-miterlimit="10" stroke-width="1"/> <path id="Path_5" data-name="Path 5" d="M740.173,231.236l-5.538,6.383c-.686.789-1.829-.363-1.148-1.148l5.066-5.837-5.066-5.837c-.681-.785.462-1.937,1.148-1.147l5.538,6.383a.984.984,0,0,1,0,1.2Z" transform="translate(1399.73 -1688.959)" fill="#e55100"/> </g></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="48.147" height="48.146" viewBox="0 0 48.147 48.146"> <g id="Group_1879" data-name="Group 1879" transform="translate(-2112.487 1482.399)"> <circle id="Ellipse_2" data-name="Ellipse 2" cx="23.573" cy="23.573" r="23.573" transform="translate(2112.987 -1481.899)" fill="none" stroke="#e55100" stroke-miterlimit="10" stroke-width="1"/> <path id="Path_5" data-name="Path 5" d="M740.173,231.236l-5.538,6.383c-.686.789-1.829-.363-1.148-1.148l5.066-5.837-5.066-5.837c-.681-.785.462-1.937,1.148-1.147l5.538,6.383a.984.984,0,0,1,0,1.2Z" transform="translate(1399.73 -1688.959)" fill="#e55100"/> </g></svg></button>',
    responsive: [{
      breakpoint: 991,
      settings: {
        arrow: false
      }
    }]
  });

  $(".testimonials-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="48.147" height="48.146" viewBox="0 0 48.147 48.146"> <g id="Group_1880" data-name="Group 1880" transform="translate(2160.633 -1434.252) rotate(180)"> <circle id="Ellipse_2" data-name="Ellipse 2" cx="23.573" cy="23.573" r="23.573" transform="translate(2112.987 -1481.899)" fill="none" stroke="#e55100" stroke-miterlimit="10" stroke-width="1"/> <path id="Path_5" data-name="Path 5" d="M740.173,231.236l-5.538,6.383c-.686.789-1.829-.363-1.148-1.148l5.066-5.837-5.066-5.837c-.681-.785.462-1.937,1.148-1.147l5.538,6.383a.984.984,0,0,1,0,1.2Z" transform="translate(1399.73 -1688.959)" fill="#e55100"/> </g></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="48.147" height="48.146" viewBox="0 0 48.147 48.146"> <g id="Group_1879" data-name="Group 1879" transform="translate(-2112.487 1482.399)"> <circle id="Ellipse_2" data-name="Ellipse 2" cx="23.573" cy="23.573" r="23.573" transform="translate(2112.987 -1481.899)" fill="none" stroke="#e55100" stroke-miterlimit="10" stroke-width="1"/> <path id="Path_5" data-name="Path 5" d="M740.173,231.236l-5.538,6.383c-.686.789-1.829-.363-1.148-1.148l5.066-5.837-5.066-5.837c-.681-.785.462-1.937,1.148-1.147l5.538,6.383a.984.984,0,0,1,0,1.2Z" transform="translate(1399.73 -1688.959)" fill="#e55100"/> </g></svg></button>',
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        sliderToScroll: 2,
        arrows: false,
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        sliderToScroll: 1
      }
    }, ]
  });

  //limit characters
  $("p").each(function () {
    "use strict";
    var maxLength = parseInt($(this).attr("data-maxlength"));
    var txt = $(this).text();
    if (txt.length > maxLength)
      $(this).text(txt.substring(0, maxLength) + ".....");
  });

  sideMenuManage();

  $(window).on("resize", function () {
    sideMenuManage();
  });

  $(window).scroll(function () {
    sideMenuManage();
  });

  window.setInterval(function () {
    sideMenuManage();
  }, 2000);

  // lightcase
  $('a[data-rel^=lightcase]').lightcase();

  // padding to body according to header height
  // bodyPaddingForHeader();

  // $(window).on('resize', function () {
  //   bodyPaddingForHeader();
  // });

  // $(window).scroll(function () {
  //   bodyPaddingForHeader();
  // });

  $(".side-menu-toggle,.side-menu-bg").click(function () {
    $(".nav-toggle").toggleClass("open");
    $("#menu").toggleClass("active");

    if ($("#menu").hasClass("active")) {
      $("html").addClass("overflowYStop");
      $(".side-menu-bg").addClass("active").animate({
        opacity: 1,
      }, 400);
    } else {
      $("html").removeClass("overflowYStop");
      $("#menu").removeClass("active");
    }
  });

  //dropdown toggle
  $(".has-submenu").click(function () {
    "use strict";
    var $this = $(this);
    var menu = $(this).children("ul");

    $this.toggleClass("open");
  });

  $(".carousel-overlay-title .heading-fancy").addClass(
    "animate__animated animate__fadeInDown"
  );
  $(".carousel-overlay-cont>*").addClass("animate__animated animate__fadeInUp");

  //changing img to wrapped div's background
  imgToBg();

  //if clicked outside container remove said class
  containerOutClock(".has-submenu", "open");

  function sideMenuManage() {
    if ($(window).width() < 577) {
      var headerHeight = $(".header").height();
      var windowHeight = $(window).innerHeight();
      var sideMenuHeight = windowHeight - headerHeight;

      $(".side-menu").css({
        top: headerHeight,
        height: sideMenuHeight,
      });
    } else {
      $(".side-menu").css({
        top: "inherit",
        height: "100vh",
      });
    }
  }

  function bodyPaddingForHeader() {
    var headerHeight = $(".header").outerHeight();

    if ($(window).width() < 992) {
      $("body").css({
        "padding-top": headerHeight,
      });
    } else {
      $("body").css({
        "padding-top": "inherit",
      });
    }
  }

  // if the target of the click isn't the container nor a descendant of the container
  function containerOutClock(target, toAddClass) {
    $(document).mouseup(function (e) {
      var container = $(target);

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(target).removeClass(toAddClass);
      }
    });
  }

  //setting overlay outer height
  $(document).ready(overlayHeight);
  $(window).resize(overlayHeight);

  function overlayHeight() {
    $(".square").each(function () {
      "use strict";
      var $this = $(this);
      var widthValue = $this.width();
      $this.css("height", widthValue);
    });
  }

  //copy img to background
  function imgToBg() {
    "use strict";
    var $classForBg = $(".imgtobg-img");
    $classForBg.addClass("imgtobg");
    $(".imgtobg").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });

    var $classForBgSm = $(".imgtobg-img-sm");
    $classForBgSm.addClass("imgtobg-sm");
    $(".imgtobg-sm").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o-sm app-xs" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });
  }

  function equalHeightFixer(targetClass) {
    // Select and loop the container element of the elements you want to equalise
    var highestBox = 0;

    $(targetClass).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).outerHeight();
      }
    });
    console.log(highestBox);
    $(targetClass).css({
      "min-height": highestBox,
    });
  }

  function scrollDestination() {
    var $section = $("#counter");
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        console.log("reached counter div");
        setTimeout(function () {
          move1();
        }, 500);
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
    });
  }

  $('.scroll-line').each(function () {
    var $section = $(this);
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        setTimeout(function () {
          $section.addClass('scrolled');
        }, 300);
        // $(document).unbind("scroll");
      }
    });

  });

});
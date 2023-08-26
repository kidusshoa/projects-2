var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

/*$('owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})*/

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 1,
        stagePadding: 200,
      },
      1200: {
        items: 1,
        stagePadding: 250,
      },
      1400: {
        items: 1,
        stagePadding: 300,
      },
      1600: {
        items: 1,
        stagePadding: 350,
      },
      1800: {
        items: 1,
        stagePadding: 400,
      },
    },
  });
});

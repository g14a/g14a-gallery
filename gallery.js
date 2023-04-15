$(document).ready(function() {
    // Initialize the carousel
    $('.gallery').slick({
      dots: true, // Show dots for navigation
      infinite: true, // Infinite looping
      speed: 300, // Transition speed
      slidesToShow: 3, // Number of images to show at once
      slidesToScroll: 1, // Number of images to scroll at once
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1 // Change number of images to show on smaller screens
          }
        }
      ]
    });
  });
  
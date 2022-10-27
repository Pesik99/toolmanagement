(function($) {
  "use strict"; // Start of use strict

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  // Toggle Sidebar
  $(document).ready(function() {
    var scrollDistance = $(this).scrollTop();
      $('a#click-a').click(function(){
          $('.sidebar').toggleClass('sidebar-view');
      });
  });

  if ($(window).width() < 768) {
    $(document).ready(function(){
      $("#click-a").trigger('click'); 
  });
 };

 // Scroll recent when refresh page
 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// chart donut
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [10000,60000];
var barColors = [
  "#DC143C",
  "#00aba9"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 2
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [20000,50000];
var barColors = [
  "#DC143C",
  "#00aba9"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 3
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [5000,80000];
var barColors = [
  "#DC143C",
  "#00aba9"
];

new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 4
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [14000,1000];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart4", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 5
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [20000,3000];
var barColors = [
  "#DC143C",
  "#00aba9"
];

new Chart("myChart5", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 6
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [1000,14000];
var barColors = [
  "#FF7F50",
  "#DC143C"
];

new Chart("myChart6", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 7
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart7", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 8
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart8", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 9
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart9", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 10
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart10", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 11
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart11", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 12
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart12", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 13
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart13", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 14
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart14", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 15
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart15", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 16
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart16", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 17
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart17", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 18
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart18", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 19
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart19", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 20
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart20", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 21
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart21", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 22
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart22", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 23
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart23", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 24
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart24", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 25
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart25", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 26
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart26", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 27
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart27", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 28
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart28", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 29
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart29", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 30
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart30", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 31
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart31", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 32
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart32", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 33
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart33", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 34
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart34", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 35
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart35", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 36
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart36", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 37
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart37", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 38
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart38", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 39
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart39", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 40
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart40", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 41
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart41", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 42
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart42", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 43
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart43", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 44
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart44", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 45
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart45", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 46
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart46", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 47
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart47", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 48
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart48", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 49
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart49", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 50
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart50", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 51
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart51", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 52
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart52", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 53
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart53", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 54
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart54", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 55
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart55", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 56
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart56", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 57
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart57", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 58
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart58", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 59
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart59", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 60
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart60", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 61
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart61", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 62
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart62", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 63
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart63", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 64
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart64", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 65
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart65", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 66
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart66", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 67
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart67", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 68
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart68", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 69
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart69", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 70
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart70", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 71
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart71", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 72
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart72", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 73
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart73", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 74
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart74", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 75
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart75", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 76
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart76", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 77
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart77", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 78
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart78", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 79
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart79", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 80
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart80", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 81
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart81", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 82
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart82", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 83
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart83", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 84
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart84", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 85
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart85", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 86
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart86", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 87
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart87", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 88
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart88", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 89
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart89", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 90
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart90", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 91
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart91", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 92
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart92", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 93
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart93", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 94
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart94", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 95
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart95", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 96
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart96", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 97
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart97", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 98
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart98", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 99
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart99", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 100
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart100", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 101
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart101", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

// chart donut 102
var xValues = ["Overlimit", "Tool Life Time"];
var yValues = [40,60];
var barColors = [
  "#00aba9",
  "#c1c1c1"
];

new Chart("myChart102", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

})(jQuery); // End of use strict

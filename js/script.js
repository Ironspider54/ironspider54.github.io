$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times"), $("header").toggleClass("toggle");
  }),
    $(window).on("scroll load", function () {
      $("#menu").removeClass("fa-times"),
        $("header").removeClass("toggle"),
        $(window).scrollTop() > 0 ? $(".top").show() : $(".top").hide();
    }),
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault(),
        $("html, body").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          500,
          "linear"
        );
    });
});
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
};
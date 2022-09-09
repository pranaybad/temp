$(document).ready(function () {
  $(".btn-clipboard").click(function (e) {
    e.preventDefault();
    var copyText = $(this).parent().children("pre").text();
    navigator.clipboard.writeText(copyText);
    $("#copytoclip").toast("show");
    console.log(copyText);
  });
});

var search_header = document.getElementById("input_search_header");
var notify_tab = document.getElementById("notify_tab");
var person_tab = document.getElementById("person_tab");
var widthNotifyTab = $(".sub_header--notify_tab").css("height");

if (widthNotifyTab > "574px") {
  console.log(widthNotifyTab);
  document.querySelector(".sub_header--notify_tab").style.height = "567.660px";
}

window.onclick = function (event) {
  
  if (event.target == search_header) {
    $(".search_header--container").addClass("clicked");
    $(".search_header--result").addClass("clicked");
  } else {
    $(".search_header--container").removeClass("clicked");
    $(".search_header--result").removeClass("clicked");
  }

  if (event.target == person_tab) {
    $(".sub_header--person_tab").addClass("clicked");
  } else {
    $(".sub_header--person_tab").removeClass("clicked");
  }
  if (event.target == notify_tab) {
    $(".sub_header--notify_tab").addClass("clicked");
  } else {
    $(".sub_header--notify_tab").removeClass("clicked");
  }
};

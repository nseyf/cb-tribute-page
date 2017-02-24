function openNav() {
  document.getElementById('nav').style.width = "100%";

}
function closeNav(){
  document.getElementById('nav').style.width = "0%";

}

$(document).ready(function(){
  $('#icon').fadeIn(500);
$('#main').fadeIn(2000);
  $('#title').css({
      "text-shadow": "4px 4px 0px rgba(0, 0, 0, 0.8)"
  });
  
})
let a = 0;
$(function () {

  $("#czarnobialo").click(function () {


    if (a === 0) {


      $('body').css('background-color', '#ffffff');
      $('#czarnobialo').css('background-color', 'rgb(0, 0, 0)');
      $('#czarnobialo').css('color', '#ffffff');
      $('div h1').css('color', 'rgb(0, 0, 0)');
      $('.stopka').css('background-color', '#fff');
      $('.essa').css('color', 'black');
      $('.fas').css('color', 'black');

      a = a + 1

    } else {
      $('div h1').css('color', 'rgb(255, 255, 255)');
      $('body').css('background-color', '#121524');
      $('#czarnobialo').css('background-color', '#ffffff');
      $('#czarnobialo').css('color', 'rgb(20, 0, 66)');
      $('.stopka').css('background-color', '#01a1b7');
      $('.essa').css('color', 'white');
      $('.fas').css('color', 'white');
      a = a - 1
    }
  })

})

function copyStringToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px'
  };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  confirm("Skopiowano!");
}


const najechanie = document.querySelector('#czarnobialo');

najechanie.addEventListener('mouseover', function () {
  if (a === 0) {
    najechanie.style.backgroundColor = 'rgb(0, 0, 0)'
    najechanie.style.color = "white";
  } else if (a === 1) {
    najechanie.style.backgroundColor = '#fff';
    najechanie.style.color = 'black'
  }
})

najechanie.addEventListener('mouseleave', function () {
  if (a === 0) {
    najechanie.style.backgroundColor = '#fff';
    najechanie.style.color = "black";
  } else if (a === 1) {

    najechanie.style.backgroundColor = 'rgb(0, 0, 0)';
    najechanie.style.color = 'white'
  }
})

//if (a === 0 ) {
//$('.background').css('background', 'black');

//  $('.przycisk').css('background-color', '#000000');
//$('.przycisk').css('color', '#000000');
//  a = 1 
// } 

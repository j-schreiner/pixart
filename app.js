$('.color-choice').keypress(function(event){

  var keycode = event.keyCode || event.which

  if(keycode == '13') {

    $colorChoice = $('.color-choice').val()

    $('.brush').css("background-color", $colorChoice )

    event.preventDefault()
  }
})


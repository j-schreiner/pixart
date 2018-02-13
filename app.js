$('.color-choice').keypress(function(event){

  var keycode = event.keyCode || event.which

  if(keycode == '13') {

    $colorChoice = $('.color-choice').val()

    $('.brush').css("background-color", $colorChoice )

    event.preventDefault()
  }
})



for (var i = 0; i <= 100; i++){

  var newSquareDiv = $('<div>', {
  "class": "square",
  click: function(event){
    event.css("background-color", "green" )
    }
  })

  $('body').append(newSquareDiv)

}

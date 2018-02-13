$('.set-color').on('click', function(event){

  $colorChoice = $('.color-choice').val()

  $('.brush').css("background-color", $colorChoice )

  event.preventDefault()

})


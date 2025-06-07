 
$("#inp").keypress(function (e) {
  if (e.which === 13) {
    const todoCont = $(this).val();
    // console.log(todoCont);
    $("#list").append(`<li> <span> x</span> ${todoCont}</li > `);
    $(this).val("");
  }
});



// delete toDo

$('ul').on('click','span', function (event) {
  event.stopPropagation(); // to stop event bubbling
  $(this).parent().fadeOut(400, function () {
    $(this).remove();
  })
})


$('ul').on('click','li', function (event) {
    $(this).toggleClass('completed')
})



$('#plus').click(function () {
  $('input').fadeToggle(300);
})


/* console.log($);
console.log(jQuery);
 */

// <--------------|| Selecting Element ||------------->

// by tag name
// console.log($("h1"));

// by class name
// console.log($(".hello"));

// by id name
// console.log($("#world"));

// <--------------|| Manipulation Element ||------------->

// css adding
// let h1 = $('h1')
// h1.css('color', 'red')

// $('h1').css('color', 'red')
// $('h1').css('background-color', 'yellow')

// $("h1").css({
//   color: "red",
//   backgroundColor: "plum",
//   // background-color : 'plum'   // wrong -> kabab case is not allowed in js
// });

// access text
// console.log($('p').text());

// setter
// console.log($('p').text('act as a setter'));  // text --> text content

// console.log($('p').html());  // html --> inner html
// console.log($("p").html("<h 2> hello <strong>kya haal</strong> chal hai</h>"));  // html --> inner html

// Manipulating Atributes
// console.log($('a').text());
// console.log($('a').attr('href'));  // getter
// console.log($('a').attr('href', 'http://instagram.com'));  // setter

// selecting particular elements
// $("h1:nth-of-type(4").css("border", "2px solid black");
// $("h1:nth-of-type(4)").css("border", "2px solid black");
// $("h1:lastChild()").css("border", "2px solid black");    // not work
// $("h1:firstChild()").css("border", "2px solid black");   // not work

// $("h1:first()").css("border", "2px solid black");
// $("h1").first().css("border", "2px solid black");

// $("h1:last()").css("border", "2px solid black");
// $("h1").last().css("border", "2px solid black");

// getting value of input types

// let inpValue = $('input').val()
// console.log(inpValue);

// setter
// console.log($("input").val("mai nhi bataunga"));

// class manipulation attribute

// adding class
// $('h1').first().addClass('first')
// $('h1').first().addClass('first third sam')
// console.log($("h1").first().addClass("first third sam"));

// // remove class
// $('h1').first().addClass('first second  sam')
// $('h1').first().removeClass('second')

// contains class
// console.log($("h1").first().hasClass("sam"));
// console.log($("h1").first().hasClass("uday"));

// toggle class
// console.log($("h1").first().toggleClass("second"));
// console.log($("h1").first().toggleClass("second"));
// console.log($("h1").first().toggleClass("second"));
// console.log($("h1").first().toggleClass("second first"));
// console.log($("h1").first().toggleClass("second first"));

// Events
// $('button').click(function () {
//     console.log("Button Clicked!!");
// })

// new concept and important
// "this" is not same as that of your JS
// "this" points to the element over which the event is being triggered
// event.target == this (same kaam karega almost)
// $('li').click(function () {
//     $(this).css('color', 'crimson')
// })
// not work -> make sure never use arrow fuction
// $('li').click(()=>{
//     $(this).css('color', 'crimson')
// })

// input
// $('input').keyup(function () {
//   console.log($(this).val());

// })
// $('input').keydown(function () {
//   console.log($(this).val());

// })

// addEventListener --> 'on'
// $('button').on('click',function () {
//   console.log("Button Clicked!!!");
//   }
// )

/* $('input').keypress(function (event) {
    console.log(event);
}) */

// $("input").keypress(function (event) {
//   if (event.which == 13) {
//     console.log("You press the enter button......");
//     console.log($(this).val());
//   }
// });






// Effects 
$('#fadeout').click(function () {
  $('#container').fadeOut();
})
$('#fadein').click(function () {
  $('#container').fadeIn();
})
$('#fadetoggle').click(function () {
  $('#container').fadeToggle();
})

$(document).ready(function() {
 // console.log('Tommy can you hear me!');

  $('#tweet-text').on('input', function() {
    //console.log($(this));
    let charCount = $(this).val().length; //.val() method getting the value of tweet text
    let remainingChar = 140 - charCount;

    //DOM tree traversal targeting of the .counter value
    let counter = $(this).parent().next('div').children('.counter');
    counter.text(remainingChar);

    if (remainingChar < 0) {
      counter.addClass('error');
    } else {
      counter.removeClass('error');
    }
  });
});


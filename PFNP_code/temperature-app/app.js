// paste your function that converts farenheit to celcius here:
/* eslint-env browser, jquery */

function farenheitToCelsiusConverter(f) {
  const celsius = (f - 32) * (5 / 9);
  return celsius.toFixed(2);
}

function clearInputsAndWarnings() {
  $('#boiling-warning').hide();
  $('#freezing-warning').hide();
  $('#farenheit-input').val('');
  // document.querySelector('#boiling-warning').style.display = "none";
  // document.querySelector('#freezing-warning').style.display = "none";
  // document.querySelector('#farenheit-input').value = "";
}

function showAnswersAndWarnings(c) {
  $('#answer').html(c);
  if (c >= 100) {
    $('#boiling-warning').fadeIn();
  } else if (c <= 0) {
    $('#freezing-warning').fadeIn();
  }

  // document.querySelector('#answer').textContent = c;
  // if (c >= 100) {
  //   document.querySelector('#boiling-warning').style.display = 'block';
  // } else if (c <= 0) {
  //   document.querySelector('#freezing-warning').style.display = 'block';
  // }
}
// clearInputsAndWarnings();

$('#temperature-conversion-form').on('submit', function() {
  const f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  const c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});

// function handleSubmit(){
//   const f = document.querySelector('#farenheit-input').value;
//   clearInputsAndWarnings();
//   const c = farenheitToCelsiusConverter(f)
//   showAnswersAndWarnings(c);
// }

document.querySelector('#submit-button').addEventListener('click',handleSubmit);


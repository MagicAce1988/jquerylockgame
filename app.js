$(function () {
  $('#output').hide();
  $('#start').click(startGame);
  $('#checkLock').click(openLock);

  let secretNumber;

  function openLock() {
    let win = 0;
    for (let i = 0; i < $('input[type="number"]').length; i++) {
      const guess = $('input[type="number"]').eq(i);
      const check = checkNumber(+guess.val(), +secretNumber[i]);
      guess.css('background-color', check.background);
      if (check.checker) win++;
    }
    if (win === 3) {
      $('#start').show();
      $('small').html(`You've got it - ${secretNumber}`);
    }
  }

  function checkNumber(guessNumber, realNumber) {
    const response = {};
    if (guessNumber > realNumber) {
      response.checker = false;
      response.background = 'red';
    } else if (guessNumber < realNumber) {
      response.checker = false;
      response.background = 'blue';
    } else {
      response.checker = true;
      response.background = 'green';
    }
    return response;
  }

  function startGame() {
    $('input[type="number"]').css({
      backgroundColor: 'black',
    });
    secretNumber = Math.floor(Math.random() * 900 + 100).toString();
    $('#start').hide();
    $('#output').show();
    $('input[type="number"]').val('5');
    $('small').html(
      'Red background means guess is low, Blue background means guess is high'
    );
  }

  $('body').css({
    height: 'calc(100vh / 1.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
  $('input[type="number"]').css({
    color: 'white',
    fontSize: '3em',
    width: '60px',
    border: '1px solid black',
    backgroundColor: 'black',
  });
  $('.btn').css({
    backgroundColor: 'black',
    color: 'white',
    width: '160px',
    fontSize: '1.5em',
    padding: '15px',
    margin: '25px auto 0',
    border: '1px solid black',
    textAlign: 'center',
    cursor: 'pointer',
  });
  $('#output').css({
    backgroundColor: '#333',
    width: '300px',
    padding: '15px',
    border: '1px solid black',
    textAlign: 'center',
  });
  $('small').css({
    color: 'white',
    fontSize: '1em',
    padding: '15px',
    marginBottom: '15px',
    display: 'block',
  });
  $('#start').parent().css({
    width: '300px',
    padding: '0 15px',
    marginBottom: '10px',
  });
});

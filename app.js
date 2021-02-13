$(function () {
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
  $('#output').hide();
});

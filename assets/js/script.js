
$(document).ready(function() {

var  question = ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29','31','33','35','37'
                  ,'39','41','43','45','47'];
var  answer   = ['2','4','6','8','10','12','14','16','18','20','22','24','26','28','30','32','34','36','38'
                  ,'40' ,'42','44','46','48'];

    $('#hideAnswer').hide();
    $('#loading').hide();
    $('#refresh').on('click', function() {

          var random = getRandomArbitrary(0,24);
          var image  = getGenImage(random);

          $('#refresh').addClass('disabled');
          $('#loading').show();
          $('#dataimagequestion').attr('correct',random);
          $('#dataimagequestion').attr('src',image);
          $('#answerquestion').html('?');
          $('#loading').hide();

          $('#showAnswer').show();
          $('#hideAnswer').hide();
          $('#refresh').removeClass('disabled');

    });

    $('#showAnswer').on('click',function(){

        var correct = $('#dataimagequestion').attr('correct');
        var image   = getImage(correct);
        $('#answerquestion').html(image);
        $('#showAnswer').hide();
        $('#hideAnswer').show();

    });

    $('#hideAnswer').on('click',function(){

          $('#answerquestion').html('?');
          $('#showAnswer').show();
          $('#hideAnswer').hide();
    });

    function getRandomArbitrary(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }


   function getGenImage(number)
   {

    return 'data-image/'+question[number]+'.jpg';

  }

  function getImage(number)
  {

    return '<img src="data-image/'+answer[number]+'.jpg" height="300" width="300">';

  }




}); // ready testing block ends

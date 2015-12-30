$(document).ready(function() {
    var random = getRandomArbitrary(1,48);


    $('#dataimagequestion').on('click', function() { // code
        

    });

}); // ready testing block ends


function getRandomArbitrary(min, max) {

    var randNumber = Math.random() * (max - min) + min;
      if  (randNumber%2 == 1) {
            if (randNumber == max) {

                return randNumber - 1;

            } else {

                return randNumber + 1;

            }
      }
}


function getImage(number){

  return 'data-image/'+number+'.jpg';

}


$(document).ready(function () {

    setTimeout(function() {
        $('#splash').fadeOut(500);
     }, 2000);

     $('select').formSelect();
    $('#signup').click(openSignUp);

    function openSignUp(event){
        event.preventDefault();
        window.location.href = 'views/signup.html';

    }
});


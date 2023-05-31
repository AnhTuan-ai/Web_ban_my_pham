$(document).ready(function(){
        $('#signin_dropdown-menu').find('form').click(function (e) {
                e.stopPropagation();
         });
         $('#btn-signup').click(function(){
                $('#modalDK').modal();
         })
         $('#btn-signin').click(function(){
              alert('User:'+$('user_name').val());
         })
});
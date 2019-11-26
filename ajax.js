$(document).ready(function(){


     $("#details").click(function(){
        var read = "read";
       $.ajax({
                   url: "main.php",
                   type: "POST",
                   data: {read: read},
                   success: function (data) {
                    $("#exampleModalCenter").modal('show');
                    $("#dishere").html(data);
                   },
               });


         });

});

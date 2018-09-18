$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
        });
    });


      $(document).ready(function(){
        $(".btn1").click(function(){
          $("p").fadeOut(1000);
            });

        $(".btn2").click(function(){
         $(".btn2").fadeTo(590,0.3,function(){
        alert("Got it!")
          });
        });

        $(".btn3").click(function(){
          $("h1").fadeToggle(1000);
          $("h1").hide(500);
        })

        $("#btn4").click(function(){
            $("#btn4").toggle(2000);
        });
         $("#btn5").click(function(){
            $("#btn5").fadeOut(2000);
        });

          $("#btn6").click(function(){
            $("#btn5").fadeIn(2000);
        });

         $("#btn7").click(function(){
            $("#btn7").fadeToggle(2000);
        });

          $("#btn8").click(function(){
            $("#btn8").fadeTo(2000,0.5);
        });


          $("#flip").click(function(){
            $("#panel").slideToggle("slow");
          });

          $("li:even").click(function(){
            $(".prac").fadeOut(1000);
            });
          $("li:odd").click(function(){
            $(".prac").fadeIn(1000);
            });

});
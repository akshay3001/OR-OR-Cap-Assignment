$(document).ready(function(){
    // Activate carousel
    
    $("#myCarousel1").carousel();
    
    // Enable carousel control

                $(".left").click(function(){
                $("#myCarousel1").carousel('prev');
    });
    $(".right").click(function(){
                $("#myCarousel1").carousel('next');
    });
    
    // Enable carousel indicators

    $(".slide-one").click(function(){
                $("#myCarousel1").carousel(0);
    });
    $(".slide-two").click(function(){
                $("#myCarousel1").carousel(1);
    });
    $(".slide-three").click(function(){
                $("#myCarousel1").carousel(2);
    });
});

$(function(){
    $(".ok").on("click", function(){$(".alert").fadeOut(500)})  
    var r = () => Math.random() * 256 >> 0;
    $(document).keypress(function(event){
        if($("#oneloc").attr("class") == "fas fa-lock-open"){
            $(".one").css({background:`rgb(${r()}, ${r()}, ${r()})`});
            var onebg = $(".one").css("background").replace(" none repeat scroll 0% 0%","").replace(" / auto padding-box border-box","");
            $(".oneColorName").html(onebg);
        }
        if($("#twoloc").attr("class") == "fas fa-lock-open"){
            $(".two").css({background:`rgb(${r()}, ${r()}, ${r()})`});
            var twobg = $(".two").css("background").replace(" none repeat scroll 0% 0%","").replace(" / auto padding-box border-box","");
            $(".twoColorName").html(twobg);
        }
        if($("#threeloc").attr("class") == "fas fa-lock-open"){
            $(".three").css({background:`rgb(${r()}, ${r()}, ${r()})`});
            var threebg = $(".three").css("background").replace(" none repeat scroll 0% 0%","").replace(" / auto padding-box border-box","");
            $(".threeColorName").html(threebg);
        }
        if($("#fourloc").attr("class") == "fas fa-lock-open"){
            $(".four").css({background:`rgb(${r()}, ${r()}, ${r()})`});
            var fourbg = $(".four").css("background").replace(" none repeat scroll 0% 0%","").replace(" / auto padding-box border-box","");
            $(".fourColorName").html(fourbg);
        }
    });
    $("#oneloc").on("click", function(){
        if($("#oneloc").attr("class") == "fas fa-lock-open"){
            $("#oneloc").addClass("fa-lock").removeClass("fa-lock-open");
        }
        else{
            $("#oneloc").addClass("fa-lock-open").removeClass("fa-lock");
        }
    });
    $("#twoloc").on("click", function(){
        if($("#twoloc").attr("class") == "fas fa-lock-open"){
            $("#twoloc").addClass("fa-lock").removeClass("fa-lock-open");
        }
        else{
            $("#twoloc").addClass("fa-lock-open").removeClass("fa-lock");
        }
    });
    $("#threeloc").on("click", function(){
        if($("#threeloc").attr("class") == "fas fa-lock-open"){
            $("#threeloc").addClass("fa-lock").removeClass("fa-lock-open");
        }
        else{
            $("#threeloc").addClass("fa-lock-open").removeClass("fa-lock");
        }
    });
    $("#fourloc").on("click", function(){
        if($("#fourloc").attr("class") == "fas fa-lock-open"){
            $("#fourloc").addClass("fa-lock").removeClass("fa-lock-open");
        }
        else{
            $("#fourloc").addClass("fa-lock-open").removeClass("fa-lock");
        }
    });
});

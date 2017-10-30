function errorinput(id)
{
    $('#'+id).css({'background-color' : '#fed1dd'});
    $('#'+id).focus();

    setTimeout(function(){
        $('#'+id).css({'background-color' : '#fff'});
    }, 500);
}
function formcheck(id)
{
    var name=$("#name"+id).val();
    var phone=$("#phone"+id).val();

    if(name=='')
    {
        errorinput("name"+id);
        return 0;
    }
    if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)==0)
    {
        errorinput("phone"+id);
        return 0;
    }

    $("#form"+id).submit();
}

$(document).ready(function() {
    var triggered = false;
    $('.imessage').on('click', function(e) {
        triggered = true;
    });
	/*
    setTimeout(function(){
        if(!triggered) {
            $('.act .imessage').trigger('click');
        }
    }, 50000);
    
    setTimeout(function() {
        $('.act2 .imessage').trigger('click');
        triggered = false;
    }, 15000);
    */

    /*var triggered = false;

    $('.call-watch').on('click', function(e) {
        e.preventDefault();



        $('.watch-popup-container').fadeIn('fast');
        $('.close-watch-popup').fadeIn('fast');

        if(!triggered) {
        	$('.watch-slider').slick({
	            dots: true,
	            arrows: false,
	            infinite: false,
	            speed: 300,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            autoplay: true
	        });	  
        }

        triggered = true;   
    });

    setTimeout(function() {    

    	if(!triggered) { 
    		$('.watch-popup-container').fadeIn('fast', function() {
        	triggered = true;

        	$('.watch-slider').slick({
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            });

            setTimeout(function() {
	                $('.close-watch-popup').fadeIn('fast');
	            }, 5000);
        	});
    	}


    }, 14000);

    $('.close-watch-popup').on('click', function(){
        $('.watch-popup-container').fadeOut('fast');
    });

    $('#watch-form').on('submit', function(e){
        e.preventDefault();
        var formData = $(this).serialize();


        $.ajax({
            method: "GET",
            url: "send.php",
            data: formData,
        }).done(function() {
            $('.watch-popup').fadeOut('fast', function(){
               $('.watch-result').fadeIn('fast'); 
            });
        });
    });*/

    var windowHeight = $(window).height();
    //$("header").css("height", windowHeight); 
    //$(".wrapper").css("height", windowHeight); 
    //$("#scene").css("height", windowHeight); 

    $(".gradient_h1").pxgradient({ //произвольный селектор jQuery
        step: 2, // размер шага градиента в пикселях. Меньше шаг — больше качество, но меньше производительность
        colors: ["#99bf61","#005926"], // цвета. формат — hex (#4fc05a или #333)
        dir: "y" // направление градиента. x — горизонтальное, y — вертикальное
    });
    /*$('h1 span').gradientText({
        colors: ['#99bf61', '#005926']
    });*/

    var start_pos=$('#stick_menu').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop()>=700) 
        {
            $('#stick_menu').fadeIn();
            $('#stick_menu').attr('class', 'top_header1 to_top phone_hidden1');
        }
        else 
        {
            $('#stick_menu').fadeOut();
            $('#stick_menu').attr('class', 'top_header1 phone_hidden');
        }
    });

    $(".fancy").fancybox({
        
    });

    $('.politic_text').live("click", function(e) {
        $('.imessage_politic').fadeIn();
        $(".iobertka").fadeIn();
    });

    $(".iobertka, .close_butt").click(function(){
        $('.imessage_politic').fadeOut();
        $(".iobertka").fadeOut();
    });

    $(".imessage").fancybox({
    });

    $(".google_mask").click(function(){
        $('.google_mask').fadeOut();
    });	

    $(".inputphone").mask("+7 999 999 99 99");

    $('input').keypress(function(e){
        if(e.keyCode==13)
        {
            var qid = $(this).parents('form').attr('alt');
            formcheck(qid);
        }
    });

    $(window).scroll(function() {
        $('.our_services').each(function(){
            var imagePos = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var topOfWindow = $(window).scrollTop();
            if (imagePos < scrollBottom-400) {
                $('.post1').addClass("visible animated fadeIn ");
                $('.post2').addClass("visible animated fadeIn delay_05");
                $('.post3').addClass("visible animated fadeIn delay_1");
                $('.post4').addClass("visible animated fadeIn delay_15");
                $('.post5').addClass("visible animated fadeIn delay_2");
                $('.post6').addClass("visible animated fadeIn delay_25");
            }
        });
    });

    $(window).scroll(function() {
        $('.why_we').each(function(){
            var imagePos = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var topOfWindow = $(window).scrollTop();
            if (imagePos < scrollBottom-400) {
                $('.post7').addClass("visible animated fadeInLeft ");
                $('.post8').addClass("visible animated fadeInRight ");
                $('.post9').addClass("visible animated fadeInLeft delay_1");
                $('.post10').addClass("visible animated fadeInRight delay_1");
                $('.post11').addClass("visible animated fadeInLeft delay_15");
                $('.post12').addClass("visible animated fadeInRight delay_15");
            }
        });
    });

    $(window).scroll(function() {
        $('.hww_standart').each(function(){
            var imagePos = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var topOfWindow = $(window).scrollTop();
            if (imagePos < scrollBottom-300) {
                $('.post13').addClass("visible animated fadeIn ");
                $('.post14').addClass("visible animated_min fadeInLeft ");
                $('.post15').addClass("visible animated fadeIn delay_1");
                $('.post16').addClass("visible animated_min fadeInLeft delay_1");
                $('.post17').addClass("visible animated fadeIn delay_15");
            }
        });
    });

    $(window).scroll(function() {
        $('.hww_individ').each(function(){
            var imagePos = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var topOfWindow = $(window).scrollTop();
            if (imagePos < scrollBottom-300) {
                $('.post18').addClass("visible animated fadeIn ");
                $('.post19').addClass("visible animated fadeIn delay_1");
                $('.post20').addClass("visible animated fadeIn delay_2");
                $('.post21').addClass("visible animated fadeIn delay_3");
                $('.post22').addClass("visible animated fadeIn delay_4");
            }
        });
    });
    $(window).scroll(function() {
        $('.hww_individ').each(function(){
            var imagePos = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var topOfWindow = $(window).scrollTop();
            if (imagePos < scrollBottom-300) {
                $('.post23').addClass("visible animated fadeInDown delay_05");
                $('.post24').addClass("visible animated fadeInUp delay_15");
                $('.post25').addClass("visible animated fadeInDown delay_25");
                $('.post26').addClass("visible animated fadeInUp delay_35");
            }
        });
    });

    $(function(){
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top - 70}, 1000);
            return false; 
        }); 
    });

    $(".show_btn").click(function(){
        $(this).parent().parent().children('.qb_show').slideToggle("slow");
        $(this).parent().children(".show_btn").hide();
        $(this).parent().children(".hide_btn").show();
    });

    $(".hide_btn").click(function(){

        $(this).parent().parent().children('.qb_show').slideToggle("slow");
        $(this).parent().children(".show_btn").show();
        $(this).parent().children(".hide_btn").hide();

    });
    /*проекты*/
    $(".show_objects_block_btn").click(function(){
        $(this).parent().parent().children('.hidden_ob_block').slideToggle("slow");
        $(this).parent().children(".show_objects_block_btn").hide();
        $(this).parent().parent().children().children(".hide_objects_block_btn").show();
    });

    $(".hide_objects_block_btn").click(function(){

        $(this).parent().parent().children('.hidden_ob_block').slideToggle("slow");
        $(this).parent().parent().children().children(".show_objects_block_btn").show();
        $(this).parent().children(".hide_objects_block_btn").hide();

    });
    /*отзывы*/
    $(".show_otz_blocks_btn").click(function(){
        $(this).parent().parent().children('.hidden_otz_block').slideToggle("slow");
        $(this).parent().children(".show_otz_blocks_btn").hide();
        $(this).parent().parent().children().children(".hide_otz_blocks_btn").show();
    });

    $(".hide_otz_blocks_btn").click(function(){

        $(this).parent().parent().children('.hidden_otz_block').slideToggle("slow");
        $(this).parent().parent().children().children(".show_otz_blocks_btn").show();
        $(this).parent().children(".hide_otz_blocks_btn").hide();

    });
    /*вопросы*/






    $(".show_questions_blocks_btn").click(function(){
        $(this).parent().parent().children('.questions_blocks_hidden').slideToggle("slow");
        $(this).parent().children(".show_questions_blocks_btn").hide();
        $(this).parent().parent().children().children(".hide_questions_blocks_btn").show();
        $(this).parent().parent().children().children().children(".our_experts_btn").show();
    });

    $(".hide_questions_blocks_btn").click(function(){

        $(this).parent().parent().children('.questions_blocks_hidden').slideToggle("slow");
        $(this).parent().parent().children().children(".show_questions_blocks_btn").show();
        $(this).parent().children(".hide_questions_blocks_btn").hide();
        $(this).parent().parent().children().children().children(".our_experts_btn").hide();

    });


    var slide_number = 0;
    var slider_count = $(".slide").length-3;
    var slide_width = 335;
    $(".strelka_right_slide").live("click",function(){
        sliderON = 0;
        if(slide_number < slider_count)
        {
            slide_number++;
            $(".slider").animate({"left": "-="+slide_width+"px"}, "easein");
        }
        else if(slide_number = slider_count)
        {
            slide_number = 0;
            $(".slider").animate({"left": 0 +"px"}, "easein");
        }
    });
    $(".strelka_left_slide").live("click",function(){
        sliderON = 0;
        if(slide_number > 1)
        {
            slide_number--;
            $(".slider").animate({"left": "+="+slide_width+"px"}, "easein");
        }
        else 
        {
            slide_number = slider_count;
            $(".slider").animate({"left": "-"+(slider_count*slide_width)+"px"}, "easein");
        }
    });	

    //отзывы


    var slide_number1 = 1;
    var slider_count1 = $(".slide-otz").length-1;
    var slide_width1 = 920;
    $(".strelka_right_slide-otz").live("click",function(){
        sliderON = 0;
        if(slide_number1 < slider_count1 && slide_number1 > 0)
        {
            slide_number1++;
            $(".slider-otz").animate({"left": "-="+slide_width1+"px"}, "easein");
        }
        else if(slide_number1==0)
        {
            slide_number1 = 1;
            $(".slider-otz").animate({"left": "-="+slide_width1+"px"}, "easein");
        }	
    });
    $(".strelka_left_slide-otz").live("click",function(){
        sliderON = 0;
        if(slide_number1 > 1)
        {
            slide_number1--;
            $(".slider-otz").animate({"left": "+="+slide_width1+"px"}, "easein");
        }
    });	



    //news
    var slide_number2 = 0;
    var slider_count2 = $(".slide-news").length-3;
    var slide_width2 = 330;
    $(".strelka_left_slide-news").live("click",function(){
        sliderON = 0;
        if(slide_number2 < slider_count2-1 && slide_number2 > 0)
        {
            slide_number2++;
            $(".slider-news").animate({"left": "+="+slide_width2+"px"}, "easein");
        }
        else if(slide_number2==0)
        {
            slide_number2 = 1;
            $(".slider-news").animate({"left": "+="+slide_width2+"px"}, "easein");
        }
    });
    $(".strelka_right_slide-news").live("click",function(){
        sliderON = 0;
        if(slide_number2 > 0)
        {
            slide_number2--;
            $(".slider-news").animate({"left": "-="+slide_width2+"px"}, "easein");
        }
    });	

});
$(document).ready(function() {

    /*  
    $('.video-3').hide();
  $.fn.parallax = function(strength) {
    var scroll_top = $(window).scrollTop();
    var move_value = Math.round(scroll_top * strength);
    this.css('background-position', '0 -'+ move_value +'px');
};

$(window).on('scroll', function() {
    $('header').parallax(0.5);
    $('.section-aboutme').parallax(0.2);
   
});*/


    if ($(window).width() > 479) {
        
         

        $('.js--wp-5').waypoint(function(direction) {

            if (direction == 'down') {
                
                $('.colg-img-2 icon').hide();
                $('.colg-img-1 icon').hide();
                $('.colg-img-1').css('height', 'auto');
                $('.colg-img-1').css('transition', 'all 2s');
                $('.colg-img-2').css('padding-top', '3px');
                $('.colg-img-1').css('padding-top', '3px');
                $('.colg-img-1').css('opacity', '1');
                $('.colg-img-2').css('opacity', '1');
                $('.colg-img-2 h3').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.icon-univ').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-desc').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-img-2 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-img-2').css('height', 'auto');
                $('.colg-img-2').css('transition', '2s');
                $('.section-myeducation').css('background-color', 'rgba(0, 0, 0, 0.69)');
                $('.section-myeducation').css('transition', 'background-color 2s');
                $('.icon-univ').css('transition', 'color 2s');
                $('.colg-desc').css('transition', 'color 2s');
            }

        }, {
            offset: '40%'
        });
        $('.js--wp-5').waypoint(function(direction) {

            if (direction == 'up') {
                
                $('.colg-img-2 icon').delay(500).show(500);
                $('.colg-img-2 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-1 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-1').css('opacity', '0');
                $('.colg-img-2').css('opacity', '0');
                $('.colg-img-2 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('transition', 'color 2s');
                $('.colg-img-2').css('height', '12%');
                $('.colg-img-2').css('transition', '0.5s');
                $('.colg-img-2').css('padding-top', '0');
                $('.colg-img-1').css('padding-top', '0');
                $('.colg-img-1 h3').css('color', 'rgb(255, 255, 255)')
                $('.colg-img-2 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-1').css('height', '12%');
                $('.colg-img-1').css('transition', '0.5s');
                $('.colg-img-1 icon').delay(300).show(500);
                $('.icon-univ').css('color', 'white');
                $('.colg-desc').css('color', 'white');
                $('.icon-univ').css('transition', 'color 2s');
                $('.colg-desc').css('transition', 'color 2s');
                $('.section-myeducation').css('background-color', 'transparent');
                $('.section-myeducation').css('transition', 'background-color 2s');
            }
        }, {
            offset: '90%'
        });


        $('.section-skills').waypoint(function(direction) {

            if (direction == 'down') {

                $('.js-skill-para').css('transition', '3s');
                $('.skill-para').css('transition', '3s');
                $('.skill-para').css('opacity', '1');

                $('.js-skill-para').css('opacity', '1');
                $('.js-skill-para').css('padding', '2% 0');


            }
        }, {
            offset: '75%'
        });

        $('.section-skills').waypoint(function(direction) {

            if (direction == 'down') {

                $('.skill-icon').css('transition', '3s');
                $('.skill-icon').css('font-size', '250%');
                $('.skill-desc').css('margin-top', '4%');
            }
        }, {
            offset: '70%'
        });

        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-1").addClass('animated fadeIn');
            $(".js-para-i").css('margin-left', '5%');
            $(".js-para-i").css('transition', '5s');
            $(".js-para-i").css('animation-delay', '0.5s');
            $(".js-para-i").css('animation-duration', '3s');

        }, {
            offset: '70%'
        });
        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-2").addClass('animated fadeIn');
            $(".js--wp-1").css('margin-right', '5%');
            $(".js-para-i").css('margin-left', '14%');
            $(".js--wp-1").css('transition', 'margin-right 1s');
            $(".js--wp-1").css('animation-delay', '1s');
            $(".js--wp-1").css('animation-duration', '3s');


        }, {
            offset: '70%'
        });

        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-4").addClass('animated fadeIn');
            $(".js--wp-2").css('margin', '3%');
            $(".js--wp-1").css('margin-right', '3%');
            $(".js-para-i").css('margin-left', '15%');
        }, {
            offset: '70%'
        });

    } else {

        $('.js--wp-5').waypoint(function(direction) {

            if (direction == 'down') {
                $('.colg-img-2 icon').hide();
                $('.colg-img-1 icon').hide();
                $('.colg-img-1').css('height', 'auto');
                $('.colg-img-1').css('transition', '2s');
                $('.colg-img-2').css('padding-top', '5px');
                $('.colg-img-1').css('padding-top', '5px');
                $('.colg-img-1').css('opacity', '1');
                $('.colg-img-2').css('opacity', '1');
                $('.colg-img-2 h3').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-img-2 h3').css('margin', '0');
                $('.icon-univ').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-desc').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-img-2 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('color', 'rgba(224, 219, 193, 0.68)');
                $('.colg-img-2').css('height', 'auto');
                $('.colg-img-2').css('transition', '2s');
                $('.section-myeducation').css('background-color', 'rgba(0, 0, 0, 0.69)');
                $('.section-myeducation').css('transition', 'background-color 2s');
                $('.icon-univ').css('transition', 'color 2s');
                $('.colg-desc').css('transition', 'color 2s');
            }

        }, {
            offset: '40%'
        });
        $('.js--wp-5').waypoint(function(direction) {

            if (direction == 'up') {
                $('.colg-img-2 icon').delay(500).show(500);
                $('.colg-img-2 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-1 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-2 h3').css('transition', 'color 2s');
                $('.colg-img-1 h3').css('transition', 'color 2s');
                $('.colg-img-2').css('height', '12%');
                $('.colg-img-2').css('transition', '0.5s');
                $('.colg-img-1').css('opacity', '0');
                $('.colg-img-2').css('opacity', '0');
                $('.colg-img-2').css('padding-top', '0');
                $('.colg-img-1').css('padding-top', '0');
                $('.colg-img-1 h3').css('color', 'rgb(255, 255, 255)')
                $('.colg-img-2 h3').css('color', 'rgb(255, 255, 255)');
                $('.colg-img-1').css('height', '12%');
                $('.colg-img-1').css('transition', '0.5s');
                $('.colg-img-1 icon').delay(300).show(500);
                $('.icon-univ').css('color', 'white');
                $('.colg-desc').css('color', 'white');
                $('.icon-univ').css('transition', 'color 2s');
                $('.colg-desc').css('transition', 'color 2s');
                $('.section-myeducation').css('background-color', 'transparent');
                $('.section-myeducation').css('transition', 'background-color 2s');
            }
        }, {
            offset: '90%'
        });


        $('.section-skills').waypoint(function(direction) {

            if (direction == 'down') {

                $('.js-skill-para').css('transition', '3s');


                $('.js-skill-para').css('opacity', '1');
                $('.js-skill-para').css('padding-bottom', '30px');


            }
        }, {
            offset: '75%'
        });

        $('.section-skills').waypoint(function(direction) {

            if (direction == 'down') {

                $('.skill-icon').css('transition', '3s');
                $('.skill-icon').css('padding-top', '30px');
                $('.skill-icon').css('font-size', '150%');
                $('.skill-desc').css('margin-top', '4px');
            }
        }, {
            offset: '70%'
        });




        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-1").addClass('animated fadeIn');
            $(".js-para-i").css('margin-left', '5px');
            $(".js-para-i").css('transition', '5s');
            $(".js-para-i").css('animation-delay', '0.5s');
            $(".js-para-i").css('animation-duration', '3s');

        }, {
            offset: '70%'
        });
        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-2").addClass('animated fadeIn');
            $(".js--wp-1").css('margin-right', '5px');
            $(".js-para-i").css('margin-left', '10px');
            $(".js--wp-1").css('transition', 'margin-right 1s');
            $(".js--wp-1").css('animation-delay', '1s');
            $(".js--wp-1").css('animation-duration', '3s');


        }, {
            offset: '70%'
        });

        $('.section-aboutme').waypoint(function(direction) {

            $(".js--wp-4").addClass('animated fadeIn');
            $(".js--wp-2").css('margin', '3px');
            $(".js--wp-1").css('margin-right', '3px');
            $(".js-para-i").css('margin-left', '15px');
        }, {
            offset: '70%'
        });


    }

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });




    function textIsBlank(varName) {
        if ((varName.value).replace(/^\s+|\s+$/gm, '').length == 0) {
            changeTextboxAppearance(varName);
            return true;
        }
        return false;
    }

    function changeTextboxAppearance(varName) {
        varName.focus();
        varName.style.borderColor = "red";
    }

    function validateName() {
        var varName = document.getElementById("name");
        if (textIsBlank(varName) == true) {
            sweetAlert("Oops...", "You left the Name field blank!", "error");
            return false;
        }
        if (varName.value.length >= 2 && (/^[A-Za-z\s]+$/.test(varName.value)) == true) {
            varName.style.borderColor = "none";
            return true;
        } else if (varName.value.length < 2 && (/^[A-Za-z\s]+$/.test(varName.value)) == true) {
            changeTextboxAppearance(varName);
            sweetAlert("Oops...", "The Name you entered is too short!", "error");
            return false;
        } else {
            changeTextboxAppearance(varName);
            sweetAlert("Oops...", "Sorry, special characters and numbers are not allowed!", "error");
            return false;
        }
    }

    function validateEmail() {
        var varEmail = document.getElementById("email");
        var regexpr = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (textIsBlank(varEmail) == true) {
            changeTextboxAppearance(varEmail);
            sweetAlert("Oops...", "You left the Email field blank!", "error");
            return false;
        }
        if (regexpr.test(varEmail.value) != true) {
            changeTextboxAppearance(varEmail);
            sweetAlert("Oops...", "Please enter a valid email address!", "error");
            return false;
        } else {
            varEmail.style.borderColor = "none";
            return true;
        }
    }


    function validateForm() {
        if (validateName() == true & validateEmail() == true) {

            $.ajax({
                type: "POST",
                url: "formProcess.php",
                data: $("#form-contact").serialize(),
                success: function(text) {
                    formSuccess();
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                    $('#name').style.borderColor = "#fff";
                    $('#email').style.borderColor = "#fff";
                    console.log(text);
                },
                error: function(text) {
                    formFailure();
                    console.log(text);
                }
            });
        } else {
            validateName();
            validateEmail();
        }
    }

    $('#form-contact').submit(function(event) {

        // Stop the browser from submitting the form.

        event.preventDefault();
        validateForm();
    });

    function formSuccess() {
        swal("Good job!", "Your information was sent successfully!", "success");
    }


    function formFailure() {
        sweetAlert("Oops...", "Some error occured", "error");
    }

    //offset() measures how far down the sticky element is from the top of the window
    var stickyTop = $('nav').offset().top;

    //whenever the user scrolls, measure how far we have scrolled
    $(window).scroll(function() {
        var navpadding = $('nav').css('height');
        var secpadding = $('.section-aboutme').css('padding-top');

        var windowTop = $(window).scrollTop();
        var $nav = $('nav');
        //check to see if we have scrolled past the original location of the sticky element
        if (windowTop > stickyTop) {

            //if so, change the sticky element to fised positioning
            $('nav').addClass('stuck');

            $('.section-aboutme').css('padding-top', navpadding);

        } else {
            $('nav').removeClass('stuck');
            $('.section-aboutme').css('padding-top', '0');

        }
    });
    

    $('.js--nav-icon').click(function() {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }


    });
    
    (document).getElementsByClassName("sticky")[0].onclick = abc;
        
        function abc() {
            console.log('hrer');
            var nav =$('.js--main-nav');
        nav.addClass('My_Class');
            document.getElementsByClassName('js--main-nav')[0].style.backgroundColor="red";
            
    }

    $('.section-skills').waypoint(function(direction) {

        if (direction == 'down') {
            $('.video-1').hide();
            $('.video-3').show();

        } else {
            $('.video-3').hide();
            $('.video-1').show();

        }
    }, {
        offset: '5%'
    });
    
   /* var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
    
    nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
 
  return false;
});*/

});
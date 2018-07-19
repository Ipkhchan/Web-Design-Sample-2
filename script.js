//JQuery Functions

$(document).ready(function(){
    
//    Toggle Menu Visibility for Small Screens
    $(".menu-icon").click(function () {
        $(".topnav li")
            .slideToggle();
    });
//    Scroll Down to Next Section when Down button clicked
    $(".go-down").click(function() {
        $('html').animate({ scrollTop: goDownHere() }, 'slow');
    });
//    Scroll Up to Previous Section when Up Button clicked
    $(".go-up").click(function() { 
        $('html').animate({ scrollTop: goUpHere() }, 'slow');
    });
//    Change scroll navigation button color based on window's background color for visibility. Also toggle visibility of up and down visibilities when the user is at the top or bottom of the page'
    $(window).scroll(function() {
        if(document.getElementsByClassName("row-16")[0].getBoundingClientRect().top < document.getElementsByClassName("go-down")[0].getBoundingClientRect().top) {
            $(".go-down svg").css("fill", "white");
        }
        else {
            $(".go-down svg").css("fill", "black")
        };
         if(document.getElementsByClassName("row-16")[0].getBoundingClientRect().top < document.getElementsByClassName("go-up")[0].getBoundingClientRect().top) {
            $(".go-up svg").css("fill", "white");
        }
        else {
            $(".go-up svg").css("fill", "black")
        };
        
        if(document.getElementsByClassName("row-16")[0].getBoundingClientRect().top < document.getElementsByClassName("cart")[0].getBoundingClientRect().top) {
            $(".cart svg").css("fill", "white");
        }
        else {
            $(".cart svg").css("fill", "black")
        };
        if($(window).scrollTop() !=0) {
            $(".go-up").css("display", "block");
        } else {
            $(".go-up").css("display", "");
        }
        if($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $(".go-down").css("display", "none");
        } else {
            $(".go-down").css("display", "");
        };
    });
    
//    If plan is selected, store string referring to plan in cart.   
    $(".planOne").click(function() {
        sessionStorage.setItem("planSelected", "Plan-1");
        $(".cartItem").html("1");
    });
    $(".planTwo").click(function() {
        sessionStorage.setItem("planSelected", "Plan-2");
        $(".cartItem").html("2");
    });
    $(".planThree").click(function() {
        sessionStorage.setItem("planSelected", "Plan-3");
        $(".cartItem").html("3");
    }); 
    
    
//      when cart is clicked, go to page that says, you have selected such and such plan
    $(".cart").click(function() {
        window.location= "checkout.html";
    });
    
    if ($("html").attr("class")=="checkout") {
        if (sessionStorage.getItem("planSelected") != undefined) { 
            document.getElementsByClassName("selectedPlan")[0].textContent = "You selected " + sessionStorage.getItem("planSelected");
        } else {
            console.log ("2222");
             document.getElementsByClassName("selectedPlan")[0].textContent = "Your Cart is Empty."
        };
    };


    
    
//    show icon showing that there is item in Cart
    

});




//Scroll to Different Sections Functionality
//Buffer since scrollTop does not seem to precisely go to the desired value
var buffer = 1;

function goDownHere() { 
//    Defines content section positions and then check what the current viewport position is in order to determine where to scroll to. Returns the desired position value to scroll to.
    //    Row-5 Position (536)
    var firstPos = document.getElementsByClassName("row-5")[0].getBoundingClientRect().top + scrollY;
//    Row-8 Position 
    var secondPos = document.getElementsByClassName("row-8")[0].getBoundingClientRect().top + scrollY;
//    Row-13 Position 
    var thirdPos = document.getElementsByClassName("row-13")[0].getBoundingClientRect().top + scrollY;
//    Row-15 Position 
    var fourthPos = document.getElementsByClassName("row-15")[0].getBoundingClientRect().top + scrollY;

    if (scrollY < firstPos) {
        return firstPos + buffer;
    }
    else if (scrollY < secondPos) {
        return secondPos + buffer;
    }
    else if (scrollY < thirdPos) {
        return thirdPos + buffer;
    }
    else if (scrollY < fourthPos) {
        return fourthPos + buffer;
    }
    else {
        return document.body.getBoundingClientRect().bottom + scrollY - window.innerHeight;
    }
};

function goUpHere() {
//    Defines content section positions and then check what the current viewport position is in order to determine where to scroll to. Returns the desired position value to scroll to.
//    Row-5 Position (536)
    var firstPos = document.getElementsByClassName("row-5")[0].getBoundingClientRect().top + scrollY;
//    Row-8 Position 
    var secondPos = document.getElementsByClassName("row-8")[0].getBoundingClientRect().top + scrollY;
//    Row-13 Position 
    var thirdPos = document.getElementsByClassName("row-13")[0].getBoundingClientRect().top + scrollY;
//    Row-15 Position 
    var fourthPos = document.getElementsByClassName("row-15")[0].getBoundingClientRect().top + scrollY;
    if (scrollY > fourthPos) {
        return fourthPos - buffer;
    }
    else if (scrollY > thirdPos) {
        return thirdPos - buffer;
    }
    else if (scrollY > secondPos) {
        return secondPos - buffer;
    }
    else if (scrollY > firstPos) {
        return firstPos - buffer;
    }
    else {
        return document.body.getBoundingClientRect().top;
    }
};


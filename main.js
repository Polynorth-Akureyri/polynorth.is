$(document).ready(function() {
    // Get the header element
    var header = $('#main-header');
    var logoImage = $('#logo-image');
  
    // Set the initial class
    if ($(window).scrollTop() > 0) {
        header.addClass('is-white');
    }
  
    // On scroll event
    header.addClass('is-white');

  // On scroll event
    $(window).scroll(function() {
        // Check if the user has scrolled down
        if ($(this).scrollTop() > 0) {
            header.removeClass('is-white');
            header.addClass('is-black');
            logoImage.attr('src', 'images/PolynorthLogoWide02.png')
        } else {
            header.removeClass('is-black');
            header.addClass('is-white');
            logoImage.attr('src', 'images/PolynorthLogoWide01.png')
        }
        header.stop(true, true).animate({ opacity: 1 }, 5000);
    });

    $('#pl-1').addClass('is-active').show();
    $('#mobprod-1').addClass('is-active')
    var activeProduct = $('#pl-1').attr("id").match(/\d+$/)[0];

    // Tab click event
    $('.prod-link').click(function() {
        currId = $(this).attr("id").match(/\d+$/)[0];
        if (currId != activeProduct){
            // Get the data-tab attribute value
            var tabId = $(this).data('tab');
            $('#pl-'+activeProduct).removeClass('is-active')
            $('#mobprod-'+activeProduct).removeClass('is-active')
            $('#pl-'+currId).addClass('is-active').show()
            $('#mobprod-'+currId).addClass('is-active')
            
            switchProduct(currId, activeProduct);
            activeProduct = currId;
        }
    });

    function switchProduct(pIn,pOut){
        $('#product-'+pOut).hide();
        $('#product-'+pIn).show();
    }

    function setEqualHeight(containerId, contentId) {
        const container = document.getElementById(containerId);
        const content = document.getElementById(contentId);
        
        container.style.height = content.clientHeight + 'px';
    }
    
    function setEqualHeightForAll() {
        // Call setEqualHeight for each pair of divs
        setEqualHeight('foamballs', 'productiontext');
        setEqualHeight('foamlogo', 'qualitytext');
        // Add more pairs as needed
    }
    
    // Initial call to set equal height on page load for all div pairs
    setEqualHeightForAll();
    
    // Call the function again on window resize to ensure responsive behavior
    window.addEventListener('resize', setEqualHeightForAll);

    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        const target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); // Adjust the scroll speed if needed
        }
    });

    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $(".navbar-menu a").click(function() {
        // If a link inside the menu is clicked, close the menu
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
});
  
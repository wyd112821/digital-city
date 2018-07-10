$(function () {
    //头部banner淡入动画
    setTimeout(function () {
        $(".header-box h1").addClass("animated zoomIn");
    },600);

    $(".nav ul li").hover(function () {
        $(this).find("a").addClass("animated swing");
    },function () {
        $(this).find("a").removeClass("animated swing");
    });

    var unit =  $('.org-unit');
    var company =  $('.sup-company');
    var unitLocation = unit.offset().top;
    var companyLocation = company.offset().top - 400;

    $(".nav li.n7").click(function () {
        $("html,body").animate({
            scrollTop: unitLocation
        },{
            easing: 'easeInOutQuart',
            duration: 2000
        });
    });
    $(".nav li.n8").click(function () {
        $("html,body").animate({
            scrollTop: companyLocation
        },{
            easing: 'easeInOutQuart',
            duration: 2000
        });
    });

})
// loading
function loading() {
    $(".loading").children().children("h1").css("transform", "translateY(0%)");
    $(".loading-main").children("div").css("transform", "translateY(-0%)")
    setTimeout(() => {
        $(".loading-main").children("div").css("transform", "translateY(-100%)");
    }, 1200);
    setTimeout(() => {
        $(document).ready(function() {
            $(".loading").css("transform", "translateY(-100%)");
            setTimeout(() => {
                $("body").children("div").not(".loading").css("opacity", "1");
            }, 1000)

        });
    }, 3000);

}

function displayInforMore() {
    let rote = true;
    $('.header-icon__menu').click(() => {
        $(".informore").toggleClass("active");


        if (rote) {
            $('.header-icon__menu').css("transform", "rotate(720deg)");
            $('.header').children('h1').css("color", "#fff");
            for (let x = 0; x < 5; x++) {

                $('.header-icon__menu').children("div").eq(x).css("opacity", "0");
                $('.header-icon__menu').children("div").eq(x).css("background-color", "#fff");
                if (x === 3 || x == 4) {
                    $('.header-icon__menu').css("transform", "rotate(720deg)");
                    $('.header-icon__menu').children("div").eq(x).css("opacity", "1");
                    $('.header-icon__menu').children("div").eq(x).css("background-color", "#fff");

                }
                setTimeout(() => {
                    $('.informore-introduce').children().addClass('active');
                    $('.informore-contact').children().children().addClass('active');
                    $('.informore-link-container').addClass('active');
                }, 1100);
                rote = false;
            }
        } else {
            $('.header-icon__menu').css("transform", "rotate(720deg)");
            $('.header').children('h1').css("color", "black");
            for (let x = 0; x < 5; x++) {

                $('.header-icon__menu').children("div").eq(x).css("opacity", "1");
                $('.header-icon__menu').children("div").eq(x).css("background-color", "black");

                if (x === 3 || x == 4) {
                    $('.header-icon__menu').css("transform", "rotate(0deg)");
                    $('.header-icon__menu').children("div").eq(x).css("opacity", "0");
                    $('.header-icon__menu').children("div").eq(x).css("background-color", "black");

                }
                $('.informore-introduce').children().removeClass('active');
                $('.informore-contact').children().children().removeClass('active');
                $('.informore-link-container').removeClass('active');
                rote = true;
            }
        }
    })



}

function main() {
    loading();
    displayInforMore();

}
main();

$("body").children("div").not(".loading").css("opacity", "0");
$("body").on('mousewheel', (e) => {
    if (e.originalEvent.wheelDelta / 120 > 0) {

    } else {
        console.log('scrolling down !');
    }
})
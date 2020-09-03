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
        if (rote) {
            for (let x = 0; x < 5; x++) {

                $('.header-icon__menu').children("div").eq(x).css("opacity", "0");
                $('.header-icon__menu').css("transform", "rotate(720deg)");
                if (x === 3 || x == 4) {
                    $('.header-icon__menu').css("transform", "rotate(720deg)");
                    $('.header-icon__menu').children("div").eq(x).css("opacity", "1");

                }
                rote = false;
            }
        } else {
            for (let x = 0; x < 5; x++) {

                $('.header-icon__menu').children("div").eq(x).css("opacity", "1");
                $('.header-icon__menu').css("transform", "rotate(720deg)");
                if (x === 3 || x == 4) {
                    $('.header-icon__menu').css("transform", "rotate(0deg)");
                    $('.header-icon__menu').children("div").eq(x).css("opacity", "0");

                }
                rote = true;
            }
        }
    })



}

function main() {
    loading();
    displayInforMore()
}
main();

$("body").children("div").not(".loading").css("opacity", "0");
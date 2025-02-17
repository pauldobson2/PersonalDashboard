
/*
 */
$('#carousel-example').on('slide.bs.carousel', function(e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


<!-- show check mark js -->

$('.logo-checked').on('click', function() {
    $('.logo-checked').find('.logo-check-icon').remove();
    $(this).append('<i class="fa fa-check-circle fa-lg logo-check-icon"></i>');
    $(".carousel-item").find('.logo-check-img').removeClass('logo-list-selected');
    $(this).parents(".carousel-item").find('.logo-check-img').addClass('logo-list-selected').css('opacity', '1.0');
});


// custom tabs
$("#master").on('click', function() {
    $(".mster").removeClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");




});

$("#ali").on('click', function() {
    $(".alipay").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");




});

$("#banktrans").on('click', function() {
    $(".banktrans").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");




});

$("#unionpay").on('click', function() {
    $(".unionpay").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");




});

$("#mnp").on('click', function() {
    $(".mnp").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#visa").on('click', function() {
    $(".visa").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#paypal").on('click', function() {
    $(".paypal").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#paypal").on('click', function() {
    $(".paypal").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#easypaisa").on('click', function() {
    $(".easypaisa").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#jazzcash").on('click', function() {
    $(".jazzcash").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".upaisa").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#upaisa").on('click', function() {
    $(".upaisa").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".wechat").addClass("d-none");
});

$("#wechat").on('click', function() {
    $(".wechat").removeClass("d-none");
    $(".mster").addClass("d-none");
    $(".alipay").addClass("d-none");
    $(".banktrans").addClass("d-none");
    $(".unionpay").addClass("d-none");
    $(".mnp").addClass("d-none");
    $(".visa").addClass("d-none");
    $(".paypal").addClass("d-none");
    $(".easypaisa").addClass("d-none");
    $(".jazzcash").addClass("d-none");
    $(".upaisa").addClass("d-none");
});



// slider-2
// custom tabs
$("#masters").on('click', function() {
    $(".msters").removeClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");




});

$("#alis").on('click', function() {
    $(".alipays").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");




});

$("#banktranss").on('click', function() {
    $(".banktranss").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");




});

$("#unionpays").on('click', function() {
    $(".unionpays").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");




});

$("#mnps").on('click', function() {
    $(".mnps").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#visas").on('click', function() {
    $(".visas").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#paypals").on('click', function() {
    $(".paypals").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#paypals").on('click', function() {
    $(".paypals").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#easypaisas").on('click', function() {
    $(".easypaisas").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#jazzcashs").on('click', function() {
    $(".jazzcashs").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".upaisas").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#upaisas").on('click', function() {
    $(".upaisas").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".wechats").addClass("d-none");
});

$("#wechats").on('click', function() {
    $(".wechats").removeClass("d-none");
    $(".msters").addClass("d-none");
    $(".alipays").addClass("d-none");
    $(".banktranss").addClass("d-none");
    $(".unionpays").addClass("d-none");
    $(".mnps").addClass("d-none");
    $(".visas").addClass("d-none");
    $(".paypals").addClass("d-none");
    $(".easypaisas").addClass("d-none");
    $(".jazzcashs").addClass("d-none");
    $(".upaisas").addClass("d-none");
});
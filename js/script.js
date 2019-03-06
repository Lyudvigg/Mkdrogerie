/*==================Range==================*/

$('#inp_range_block_first_inp_sm').on('input', function () {
    let inp_range_block_first_inp = $('#inp_range_block_first_inp_sm').val();
    $('.inp_range_block_first_inp').text(inp_range_block_first_inp);
})

$('#inp_range_block_second_inp').on('input', function () {
    let inp_range_block_first_inp = $('#inp_range_block_second_inp').val();
    $('.inp_range_block_second_inp').text(inp_range_block_first_inp);
})

$('.inp_range_block_first_inp_display').on('input', function () {
    let inp_range_block_first_inp = $('.inp_range_block_first_inp_display').val();
    $('.inp_range_block_first_inp').text(inp_range_block_first_inp);
})

$('.inp_range_block_second_inp_display').on('input', function () {
    let inp_range_block_first_inp = $('.inp_range_block_second_inp_display').val();
    $('.inp_range_block_second_inp').text(inp_range_block_first_inp);
})

/*=================Card Functionality==================*/

$('.card_btn').on('click', function () {
    $(this).addClass('d_none');
    $(this).parent().children('.card_block_functionality.d_none').removeClass('d_none');
    $(this).parent().children('.card_block_functionality').addClass('card_block_functionality_active');
});

$('.plus_block').on('click', function () {
    let count = $(this).parent().children('.count_block').children('.count').text();
    count++;
    $(this).parent().children('.count_block').children('.count').text(count);
    let count_num = $(this).parent().children('.count_block').children('.count').text();
    if (count_num == 1) {
        $(this).parent().children('.minuse_block').addClass('d_none');
        $(this).parent().children('.delete_icon_block').removeClass('d_none')
    }
    else if (count_num => 1) {
        $(this).parent().children('.minuse_block').removeClass('d_none');
        $(this).parent().children('.delete_icon_block').addClass('d_none');
    }
})

$('.minuse_block').on('click', function () {
    let count = $(this).parent().children('.count_block').children('.count').text();
    count--;
    $(this).parent().children('.count_block').children('.count').text(count);
    let count_num = $(this).parent().children('.count_block').children('.count').text();
    if (count_num == 1) {
        $(this).parent().children('.minuse_block').addClass('d_none');
        $(this).parent().children('.delete_icon_block').removeClass('d_none');
    }
    else if (count_num => 1) {
        $(this).parent().children('.minuse_block').removeClass('d_none');
        $(this).parent().children('.delete_icon_block').addClass('d_none');
    }
})

$('.delete_icon_block').on('click', function () {
    $(this).parent().addClass('d_none');
    $(this).parent().parent().children('.card_btn').removeClass('d_none');
    $(this).parent().parent().children('.card_block_functionality.card_block_functionality_active').removeClass('card_block_functionality_active');
})

/*================Edit=================*/

$('.after_selected').on('click', function () {
    $(this).removeClass('d_flex');
    $(this).parent('.card').children('.card_block_functionality').addClass('card_block_functionality_active').removeClass('d_none')
})


/*==============change==============*/

$(document).bind("mouseup", function (e) {
    let temp_target = e.target;
    if (temp_target.classList.contains('card_btn') || temp_target.parentElement.parentElement.classList.contains("card_block_functionality_active") || temp_target.parentElement.classList.contains("card_block_functionality_active") || temp_target.classList.contains("card_block_functionality_active")) {
        e.stopPropagation();
        return;
    } else {
        let temp_block = $('.card_block_functionality_active');
        $(temp_block).parent().children('.card_block_functionality.card_block_functionality_active').addClass('d_none').removeClass("card_block_functionality_active");
        $(temp_block).parent().children('.after_selected').addClass('d_flex');
        temp_block.each(function () {
            let count_i = $(this).parent().children('.card_block_functionality').children('.count_block').children('.count').text()
            console.log(count_i);
            $(this).parent().children('.after_selected').children('.count_after_selected').text(count_i);
        });
    }
});


// Window Width
$('.menu_mobile').removeAttr('id');
$(window).on('resize', function (e) {
    if (e) {
        if ($(window).width() <= 768) {
            $('.Second_faq').removeAttr('id');
            $('.menu_mobile').attr("id", "faq-list")
        }
        else if ($(window).width() > 768) {
            $('.Second_faq').attr("id", "faq-list");
            $('.menu_mobile').removeAttr('id');
        }
    }
});

/*==============Mobile Menu=============*/

let counter = 0;
$('.toggler_menu').on('click', function () {
    counter++;
    if (counter % 2 !== 0) {
        $('.mobile_menu_block').css({ "opacity": "1", "visibility": "visible", "transition": ".5s" });
        $('.mobile_menu_block.opacity_n').removeClass('opacity_n');
        if ($(".mobile_menu_block").hasClass('opacity_n') == false) {
            $('body').css({ "overflow": "hidden" });
        }
    }
    else {
        $('.mobile_menu_block').css({ "opacity": "0", "visibility": "hidden", "transition": ".5s" });
        if ($(".mobile_menu_block").hasClass('opacity_n') == false) {
            $('body').css({ "overflow": "auto" });
        }
    }
})

//              mobile menu search
let search_counter = 0;
$('.header_search_mobile_block').on('click', function () {
    search_counter++;
    if (search_counter % 2 !== 0 ) {
        $('.mobile_search_menu, .menu_mobile_body_opacity_efect').css({ "opacity": "1", "visibility": "visible" })
    }
    else {
        $('.mobile_search_menu, .menu_mobile_body_opacity_efect').css({ "opacity": "0", "visibility": "hidden" })
    }
})

$('.close_search_block').on('click', function () {
    $('.mobile_search_menu, .menu_mobile_body_opacity_efect, .mobile_user_block').css({ "opacity": "0", "visibility": "hidden" })
})
let user_counter = 0;
$('.header_mobile_user_block').on('click', function () {
    user_counter++;
    if (user_counter % 2 !== 0) {
        $('.mobile_user_block, .menu_mobile_body_opacity_efect').css({ "opacity": "1", "visibility": "visible" });
    }
    else {
        $('.mobile_user_block, .menu_mobile_body_opacity_efect').css({ "opacity": "0", "visibility": "hidden" })
    }
})
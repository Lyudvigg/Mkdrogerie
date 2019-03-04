//for documents collaps
// $(function () {
//     var Accordion = function (el, multiple) {
//         this.el = el || {};
//         this.multiple = multiple || false;

//         // Variables privadas
//         var links = this.el.find('.shop_left_menu_link');
//         // Evento
//         links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
//     }

//     Accordion.prototype.dropdown = function (e) {
//         var $el = e.data.el;
//         $this = $(this),
//             $next = $this.next();

//         $next.slideToggle();
//         $this.parent().toggleClass('open');

//         if (!e.data.multiple) {
//             $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//         };
//     }

//     var accordion = new Accordion($('#accordion'), false);
// });

/*==================Range==================*/

$('#inp_range_block_first_inp').on('input', function () {
    let inp_range_block_first_inp = $('#inp_range_block_first_inp').val();
    $('.inp_range_block_first_inp').text(inp_range_block_first_inp);
})

$('#inp_range_block_second_inp').on('input', function () {
    let inp_range_block_first_inp = $('#inp_range_block_second_inp').val();
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
$('.card').on('click', function (e) {
    if (e.target !== this)
        return;

    else {
        if ($(this).children('.card_block_functionality').hasClass('card_block_functionality_active')) {
            $(this).children('.card_block_functionality.card_block_functionality_active').addClass('d_none');
            $(this).children('.after_selected').addClass('d_flex');
            let count_i = $(this).children('.card_block_functionality').children('.count_block').children('.count').text()
            $(this).children('.after_selected').children('.count_after_selected').text(count_i)
        }
    }
})

// Window Width
$('.menu_mobile').removeAttr('id');
$(window).on('resize', function (e) {
    if (e) {
        if ($(window).width() <= 768) {
            $('.Second_faq').removeAttr('id');
            $('.menu_mobile').attr("id", "faq-list");
        }
        else if ($(window).width() > 768) {
            $('.Second_faq').attr("id", "faq-list");
            $('.menu_mobile').removeAttr('id');
        }
    }
});

/*==============Mobile Menu=============*/

$('.close_header_menu').on('click', function () {
    $('.mobile_menu_block').css({ "opacity": "0", "visibility": "hidden", "transition": ".5s" });
    if ($(".mobile_menu_block").hasClass('opacity_n') == false) {
        $('body').css({ "overflow": "auto" });
    }
})

$('.toggler_menu').on('click', function () {
    $('.mobile_menu_block').css({ "opacity": "1", "visibility": "visible", "transition": ".5s" });
    $('.mobile_menu_block.opacity_n').removeClass('opacity_n');
    if ($(".mobile_menu_block").hasClass('opacity_n') == false) {
        $('body').css({ "overflow": "hidden"});
    }
})
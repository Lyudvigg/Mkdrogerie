//for documents collaps
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.shop_left_menu_link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});

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
// let click_counter = 0;
// $('.card').on('click', function () {

//     if (click_counter <= 2) {
//         click_counter++;
//     }
//     console.log(click_counter)
//     let count_num = $(this).children('.card_block_functionality').children('.count_block').children('.count').text();
//     if ($(this).children('.card_block_functionality').hasClass('card_block_functionality_active') && click_counter >= 2) {
//         $(this).children('.card_block_functionality.card_block_functionality_active').addClass('d_none')
//     }
// })

// $('.card_block_functionality').on('click', function () {
//     $('.card_block_functionality').parent().children('.card_block_functionality.d_none').removeClass('d_none');
//     console.log(123)
// })
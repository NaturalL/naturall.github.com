$('#cat-right').click(function() {
    $('#cat-left').show();
    $(this).hide();
})

$('#cat-left').click(function() {
    $('#cat-right').show();
    $(this).hide();
});

$('#toTop').click(function() {
    $('html, body').animate({scrollTop: '0px'}, 400);
})


$('p > img').parent().css("text-align","center");
$('p > img').parent().css("text-indent", '0em');
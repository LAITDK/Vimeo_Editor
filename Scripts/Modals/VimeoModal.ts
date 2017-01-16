$(function () {
    $('[data-modal-vimeo]').each(function () {
        var elm = $(this),
            mediaId = parseInt(elm.data('modal-vimeo'));
        new %SolutionName%.Modals.VimeoModal(elm, mediaId);
    });
});


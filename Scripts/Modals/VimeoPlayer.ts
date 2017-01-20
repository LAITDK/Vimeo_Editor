$('.vimeo-modal').on('show.bs.modal', function (e) {
    // initiate player with the iframe.
    var player = new Vimeo.Player(this);

    // play the player.
    player.play().then(function () { });


    // activate modal on hidden.
    $('.vimeo-modal').on('hidden.bs.modal', function (e) {
        // pause the player.
        player.pause().then(function () { });
    });
});







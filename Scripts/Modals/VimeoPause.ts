// activate modal on hidden.
$('.vimeo-modal').on('hidden.bs.modal', function (e) {
    // initiate player with the iframe.
    var player = new Vimeo.Player(this);

    // pause the player.
    player.pause().then(function () {
        console.log('Video Paused');
        // the video was paused
    });
});

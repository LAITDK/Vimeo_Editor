$(document).ready(function () {

    // If you want to control the embeds, you’ll need to create a Player object.
    // You can pass either the `<div>` or the `<iframe>` created inside the div.

    // get url 
    $("[data-vimeo-url]").each(function () {

        var vimeo_embed = new Vimeo.Player(this);
        
        vimeo_embed.on('play', function () {

        console.log('played the video!');
        });
    });
});
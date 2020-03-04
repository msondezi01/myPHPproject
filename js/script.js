$(document).ready(function(){
    var galleryImage = $('.gallery').find('img').first();
    var images = [
        'images/napoli-1.jpg',
        'images/napoli-2.jpg',
        'images/napoli-3.jpg',
        'images/napoli-4.jpg',
        'images/napoli-5.jpg',
        'images/napoli-6.jpg',
    ];

    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(750, function(){
            $(this).attr('src', images[i]);
            $(this).fadeIn(750);
        })
    }, 5000);
})
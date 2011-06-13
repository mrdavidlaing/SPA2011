function resetEvents() {
    var stopPropagation = function(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    document.addEventListener('dragenter', stopPropagation, false);
    document.addEventListener('dragexit', stopPropagation, false);
    document.addEventListener('dragover', stopPropagation, false);
}

function displayImages() {
    $('#savedImages').empty();
    var storedImages = JSON.parse(localStorage.getItem("myImages") || "[]");
    for (var idx in storedImages) {
        var newImage = new Image();
        newImage.src = storedImages[idx];
        $(newImage).bind('load', function() {
            $(this).appendTo('#savedImages')
        });
    }
}

$(document).ready(function() {
    resetEvents();

    document.addEventListener('drop', function (event) {
        var file = event.dataTransfer.files[0];

        console.log('I got a file dropped on me!', file);

        var fileReader = new FileReader();
        fileReader.onloadend = function(evt) {
            if (!evt.target.error) {

                var storedImages = JSON.parse(localStorage.getItem("myImages") || "[]");
                storedImages.push(evt.target.result);
                localStorage.setItem('myImages', JSON.stringify(storedImages));

                displayImages();
            }
        }
        fileReader.readAsDataURL(file);
    });

    displayImages();
})
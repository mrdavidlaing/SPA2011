
    var stopPropagation = function(event){
      event.stopPropagation();
      event.preventDefault();
    }

    document.addEventListener('dragenter', stopPropagation, false);
    document.addEventListener('dragexit', stopPropagation, false);
    document.addEventListener('dragover', stopPropagation, false);
    document.addEventListener('drop', function (event) {
        var file = event.dataTransfer.files[0];

        console.log('I got a file dropped on me!', file);
        var fileReader = new FileReader();

        fileReader.onloadend = function(evt) {
            if (!evt.target.error) {
                //Base64 data
                document.getElementById('droppedImage').src = evt.target.result;
            }
        }
        fileReader.readAsDataURL(file);

    });

    //var fileReader = new FileReader();
    //fileReader.onloadend = function(event){
    //  // Your code
    //  // (file data is in event.target.result)
    //}
    //fileReader.readAsDataURL(file);


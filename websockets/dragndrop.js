var stopPropagation = function(event){
  event.stopPropagation();
  event.preventDefault();
}

document.addEventListener('dragenter', stopPropagation, false);
document.addEventListener('dragexit', stopPropagation, false);
document.addEventListener('dragover', stopPropagation, false);
document.addEventListener('drop', function (event) {
  console.log('I got a drop event');
  // your code here
  // files available as event.dataTransfer.files
});

//var fileReader = new FileReader();
//fileReader.onloadend = function(event){
//  // Your code
//  // (file data is in event.target.result)
//}
//fileReader.readAsDataURL(file);
// Create an array of images
const imageArray = [
  "https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg",
  "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/11/10/0/CI_Costa-Farms-Ballad-aster.jpg.rend.hgtvcom.966.644.suffix/1447169929799.jpeg"
];
let imageNum = 0;
let carouselBox = document.getElementById("carouselBox");

// When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.
document.getElementById("next").addEventListener("click", function(event) {
  event.stopPropagation();
  imageNum++;
  if (imageNum >= imageArray.length) {
    imageNum = 0;
  }
  carouselBox.style.backgroundImage = `url("${imageArray[imageNum]}")`;
});

// When the`previous` button is clicked, the image should change to the previous image in the array.If the image has reached the start of the array, the image should start over at the end of the array.
document.getElementById("prev").addEventListener("click", function(event) {
  event.stopPropagation();
  imageNum--;
  if (imageNum < 0) {
    imageNum = imageArray.length - 1;
  }
  carouselBox.style.backgroundImage = `url("${imageArray[imageNum]}")`;
});

// When the user clicks on an image, they will be navigated to the url that hosts that image.
carouselBox.addEventListener("click", function(event) {
  event.stopPropagation();
  window.open(imageArray[imageNum]);
});

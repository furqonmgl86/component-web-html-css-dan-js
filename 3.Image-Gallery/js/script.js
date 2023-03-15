// function gantiGambar(gambarThumbnail) {
//   let fullImg = document.getElementById("gambarBesar");
//   fullImg.src = gambarThumbnail.src;
//   // gambarThumbnail.style.opacity.toggle = "1";
//   // gambarThumbnail.classList.toggle("mystyle");

//   if (fullImg.src == gambarThumbnail.src) {
//     console.log("oke");
//     gambarThumbnail.classList.add("mystyle");
//   }
// }

let fullImg = document.getElementById("gambarBesar");
let imgThumbs = document.querySelectorAll(".thumb");
console.log(imgThumbs);

function gantiGambar(gambarThumbnail) {
  fullImg.src = gambarThumbnail.src;

  imgThumbs.forEach(function (thumb) {
    thumb.style.opacity = "0.6";
  });

  gambarThumbnail.style.opacity = "1";
}

// let fullImg = document.getElementById("gambarBesar");
// let imgThumbs = document.querySelectorAll(".thumb");
// console.log(imgThumbs);

// function gantiGambar(gambarThumbnail) {
//   fullImg.src = gambarThumbnail.src;

//   imgThumbs.forEach(function (thumb) {
//     thumb.className = "thumbkan";
//   });
//   gambarThumbnail.classList.toggle("redupkan");
// }

function gantiGambar(gambarThumbnail) {
  let fullImg = document.getElementById("gambarBesar");
  fullImg.src = gambarThumbnail.src;
  // gambarThumbnail.style.opacity.toggle = "1";
  gambarThumbnail.classList.toggle("mystyle");
}

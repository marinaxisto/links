function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // tag img
  const img = document.querySelector("#profile img")

  // replace the image
  if (html.classList.contains("light")) {
    // if in light mode, add light image
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // If not in light mode, keep the default image
    img.setAttribute("src", "./assets/avatar.png")
  }
}

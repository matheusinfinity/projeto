window.toggleMode = function () {
  const html = document.documentElement

  html.classList.toggle("theme-light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("theme-light")) {
    img.setAttribute("src", "./assets/unnamed.png")
  } else {
    img.setAttribute("src", "./assets/legacy.png")
  }
}

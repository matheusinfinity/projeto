window.toggleMode = function () {
  const html = document.documentElement

  html.classList.toggle("theme-light")
  
  const  img = document.querySelector("#profile img")
  
  if(html.classList.contains("theme-light") {

    img.setAttribute("src","./unnamed.png")
  } else {

    html.classList.add("")
  }
}
